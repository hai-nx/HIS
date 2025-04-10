import { defineStore } from "pinia"

export const useUser = defineStore("user", {
    state: () => {
        return {
            accessToken: "",
            refreshToken: "",
            expireDate: "",
            user: {
                id: "",
                userName: "",
                password: "",
            },
            loading: false,
            msg: ""
        }
    },
    actions: {
        async login(userName: string, password: string) {
            
        },
        async refreshToken() {

        }
    },
    getters: {
        isAuthenticated(state) {

        }
    }

})