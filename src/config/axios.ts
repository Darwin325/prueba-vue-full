import axios, { AxiosInstance } from "axios"
import { getToken, removeToken } from "../utils/token"
import { removeUser } from "../utils/userLocalStore"
import { headers, urlApi } from "./headers"
import { router } from "../Routes/main"

//manejar errores
const axiosInstance: AxiosInstance = axios.create({
   baseURL: urlApi,
})

axiosInstance.interceptors.request.use((config) => {
   // @ts-ignore
   config.headers = headers
   config.headers.Authorization = `Bearer ${getToken()}`
   return config
})

// @ts-ignore
axiosInstance.interceptors.response.use(
   (response) => {
      return response
   },
   async (error) => {
      if (error.message === "Network Error") {
         console.log("Network Error")
      }
      if (error.response?.status === 401) {
         await router.push({ name: "Login" })
         removeToken()
         removeUser()
      }
      return Promise.reject(error)
   }
)

export { axiosInstance }
