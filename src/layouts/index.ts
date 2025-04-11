import { defineAsyncComponent, App } from "vue"
import { layouts } from "../utils/const"

export function layoutRegister(app: App) {
    app.component(layouts.default, defineAsyncComponent(() => import("./default/index.vue")));
    app.component(layouts.main, defineAsyncComponent(() => import("./main/index.vue")));
}