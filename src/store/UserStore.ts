import { defineStore } from "pinia"
import { ref } from "vue"
import { User } from "../models/user"

import { getUser } from "../utils/userLocalStore"

export const useUserStore = defineStore("user", () => {
   const isLogged = ref<boolean>(false)
   const myData = ref<User>()
   const userName = ref(getUser()?.name)

   function setIsLogged(value: boolean) {
      isLogged.value = value
   }

   function setUserName(value: string) {
      userName.value = value
   }
   return {
      myData,
      isLogged,
      userName,
      setIsLogged,
      setUserName,
   }
})
