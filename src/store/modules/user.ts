import { defineStore } from 'pinia'
import router from '@/router'

export const useUser = defineStore('user', {
    state: () => {
        return {
            accessToken: '' as string,
            refreshToken: '' as string,
            expireDate: 0 as number,
            user: {
                id: '' as string,
                userName: '' as string,
                password: '' as string,
                branchId: '' as string
            }
        }
    },
    actions: {
        login() {

            sessionStorage.setItem('user', JSON.stringify({}))
            router.push({ 
                name: 'dashboard' 
            })
        },
        logout() {
            sessionStorage.removeItem('user')
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
})