import axios from 'axios'
import queryString from 'query-string'
import { useUser } from '@/store'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'content-type': 'application/json',
    }
})

// request interceptor
service.interceptors.request.use(
    config => {
        // params
        const { params } = config
        if (params && Object.keys(params).length !== 0) {
            config.paramsSerializer = (params) => queryString.stringify(params);
        }

        // token
        const store = useUser() 
        if (store.accessToken) {
            config.headers.Authorization = `Bearer ${store.accessToken}`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const originalConfig = error.config


        return Promise.reject(error)
    }
)
