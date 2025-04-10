import axios from "axios"
import queryString from 'query-string'
import { useUser } from "@/store"

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        "content-type": "application/json"
    }
})

// request interceptor
service.interceptors.request.use(
    async (config) => {
        const { params } = config;
        if (params && Object.keys(params).length !== 0) {
            config.paramsSerializer = (params) => queryString.stringify(params);
        }
        const store = useUser();
        const token = store.accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config
    })

// response interceptor
service.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalConfig = error.config;

        if (originalConfig.url !== "api/Login/Authenticate" && originalConfig.url !== "api/Authorization/Login" && error.response && !originalConfig._retry) {
            // Access Token was expired
            if (error.response.status === 401) {
                originalConfig._retry = true;
                try {
                    const store = useUser();
                    const rs = await service.post("api/Login/Refreshtoken", {
                        acceptToken: store.accessToken,
                        refreshToken: store.refreshToken,
                    });

                    if (rs && rs.data.isSuccessed) {
                        store.accessToken = rs.data.result.acceptToken;
                        store.refreshToken = rs.data.result.refreshToken;
                    }

                    return service(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
            else if (error.response.status === 403 && error.response.data === "Miss session") {
                originalConfig._retry = true;
                try {
                    const store = useUser();
                    store.refreshToken();
                    return service(originalConfig);
                }
                catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(error);
    });

export default service