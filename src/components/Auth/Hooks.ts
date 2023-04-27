import { ref } from "vue"

import { createUserAdapter } from "../../adapters/UserAdapter"
import { Token } from "../../models/user"
import { router } from "../../Routes/main"
import { login, logout } from "../../services/Auth"
import { useUserStore } from "../../store/UserStore"
import { setToken } from "../../utils/token"
import { setUser } from "../../utils/userLocalStore"

export const LoginHooks = () => {
   const storeUser: ReturnType<typeof useUserStore> = useUserStore()
   const form = ref<HTMLFormElement>()

   const loggedUser = async () => {
      try {
         const formData = new FormData(form.value)

         const response = await login({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
         })
         const { data } = response.data

         setUser(createUserAdapter(data.user))
         setToken(data.token as Token)

         storeUser.setIsLogged(true)
         storeUser.setUserName(data.user.name)

         await router.push({ name: "Home" })
      } catch (error) {
         /*if (error?.response?.status === 403 && error?.request?.statusText === "Forbidden") {
          alert("Debe verificar su correo primero")
          return
        }*/
         alert("Usuario o contraseña incorrectos")
      }
   }

   return { loggedUser, form }
}
