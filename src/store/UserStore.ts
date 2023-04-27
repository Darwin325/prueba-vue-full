import { defineStore } from "pinia"
import { ref } from "vue"
import { createUserAdapter } from "../adapters/UserAdapter"
import { User } from "../models/user"
//import { getMe, updateMe } from "../services/Auth"

import { getUser, setUser } from "../utils/userLocalStore"

export const useUserStore = defineStore("user", () => {
   const isLogged = ref<boolean>(false)
   const myData = ref<User>()
   const userName = ref(getUser()?.name)

   function setIsLogged(value: boolean) {
      console.log("setIsLogged", value)
      isLogged.value = value
   }

   function setUserName(value: string) {
      console.log("setUserName", value)

      userName.value = value
   }

   /*const getMeData = async () => {
      const response = await getMe()
      myData.value = createUserAdapter( response.data )
   }

   const updateMeData = async ( data: UserData ) => {
      const response = await updateMe( data )
      myData.value = createUserAdapter( response.data )
      userName.value = myData.value.name
      setUser( myData.value )
   }*/

   return {
      myData,
      isLogged,
      userName,
      setIsLogged,
      setUserName,
   }
})
