import { defineAsyncComponent, App } from "vue"

export function componentRegister(app: App) {
    app.component("VButton", defineAsyncComponent(() => import("./button/index.vue")));
    app.component("VIcon", defineAsyncComponent(() => import("./icon/index.vue")));
    app.component("VInput", defineAsyncComponent(() => import("./input/index.vue")));
    app.component("VMenu", defineAsyncComponent(() => import("./menu/index.vue")));
}