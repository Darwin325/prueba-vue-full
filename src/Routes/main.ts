import { createRouter, createWebHashHistory } from "vue-router"

const Login = () => import("../components/Auth/Login.vue")
const Home = () => import("../components/Home.vue")

const routes = [
   { path: "/login", component: Login, name: "Login" },
   { path: "/home", component: Home, name: "Home" },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

export default router
