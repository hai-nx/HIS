import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', name: 'home', component: LoginView
  },
  {
    path: '/dashboard', name: 'dashboard', component: () => import('../views/dashboard/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
