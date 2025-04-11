import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { layouts } from "../utils/const"

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "login", component: () => import("../views/login/index.vue") },
  { path: "/dashboard", name: "dashboard", component: () => import("../views/dashboard/index.vue"), meta: { layout: layouts.main } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
