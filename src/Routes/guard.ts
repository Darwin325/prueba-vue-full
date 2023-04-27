import { Router } from "vue-router"
import { getToken } from "../utils/token"
import { getUser } from "../utils/userLocalStore"

export const routerGuard = (router: Router) => {
   router.beforeEach((to: any, from: any) => {
      console.log(!getToken(), !getUser())

      if (to.name === "VerifyEmail") {
         return true
      }
      if (to.name === "Register" && from.name === "Login") {
         return true
      }
      if ((!getToken() || !getUser()) && to.name !== "Login") {
         return { name: "Login" }
      }
      if (!!getToken() && !!getUser() && to.name === "Login") {
         return { name: from.name }
      }
   })
}
