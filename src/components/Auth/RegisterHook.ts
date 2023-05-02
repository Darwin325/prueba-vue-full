import { ref } from "vue"
import { register } from "../../services/Auth"
import { UserRegister } from "../../models/user"
import { router } from "../../Routes/main"

export const RegisterHook = () => {
   const form = ref<HTMLFormElement>()

   const adapData = (data: any): UserRegister => data

   const registerUser = async () => {
      const data = new FormData(form.value)
      const password = data.get("password") as string
      const confirmPassword = data.get("password_confirmation") as string

      if (password !== confirmPassword) {
         alert("Las contraseñas no coinciden")
         return
      }
      const newData = Object.fromEntries(data.entries())

      const dataRegister: UserRegister = adapData(newData)

      try {
         await register(dataRegister as UserRegister)
         alert("Se ha registrado correctamente")
         form.value?.reset()
         router.push({ name: "Login" })
      } catch (error) {
         console.log(error)
      }
   }

   return { form, registerUser }
}
