import { createRouter, createWebHashHistory } from "vue-router"
import { routerGuard } from "./guard"

const Login = () => import("../components/Auth/Login.vue")
const Home = () => import("../components/Home.vue")
const Courses = () => import("../components/Courses/Course.vue")
const Students = () => import("../components/Students/Students.vue")
const StudentCourses = () => import("../components/Students/StudentCourses.vue")
const Register = () => import("../components/Auth/Register.vue")

export const routes = [
   { path: "/login", component: Login, name: "Login" },
   { path: "/", component: Home, name: "Home" },
   { path: "/courses", component: Courses, name: "Courses" },
   { path: "/students", component: Students, name: "Students" },
   {
      path: "/student/:id/courses",
      component: StudentCourses,
      name: "StudentCourses",
   },
   { path: "/register", component: Register, name: "Register" },
]

export const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

routerGuard(router)
