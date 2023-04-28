import { createApp } from "vue"
import App from "./App.vue"
import { router } from "./Routes/main"
import { createPinia, Pinia } from "pinia"
import "bootstrap/dist/css/bootstrap.css"
// import * as bootstrap from "bootstrap/dist/js/bootstrap.js"
// window.bootstrap = bootstrap

const pinia: Pinia = createPinia()

createApp(App).use(router).use(pinia).mount("#app")

import "bootstrap/dist/js/bootstrap.js"
