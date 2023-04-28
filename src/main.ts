import { createApp } from "vue"
import App from "./App.vue"
import { router } from "./Routes/main"
import { createPinia, Pinia } from "pinia"

const pinia: Pinia = createPinia()

createApp(App).use(router).use(pinia).mount("#app")
