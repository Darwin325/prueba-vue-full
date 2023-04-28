import { axiosInstance as axios } from "../config/axios"
import { UserLogin } from "../models/user"
import { removeToken } from "../utils/token"
import { removeUser } from "../utils/userLocalStore"

export const login = async (credentials: UserLogin) => {
   return await axios.post("login", credentials)
}

export const logout = async () => {
   try {
      const response = await axios.get("logout")
      if (response.status === 200) {
         removeToken()
         removeUser()
      }
   } catch (error) {
      console.log(error)
   }
}
