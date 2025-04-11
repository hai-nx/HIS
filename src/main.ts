import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { componentRegister } from "./components/index"
import { layoutRegister } from "./layouts/index"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import "./assets/style/index.css"

const app =createApp(App)
componentRegister(app)
layoutRegister(app)
app.use(router)
app.use(createPinia())
app.mount('#app')
