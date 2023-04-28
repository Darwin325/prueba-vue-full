import { axiosInstance as axios } from "../config/axios"
import { urlApi } from "../config/headers"

export const getCourses = async () => {
   return await axios.get("/courses")
}

export const getTopCourses = async ({
   old_date,
   limit,
}: {
   old_date?: string
   limit?: number
}) => {
   let url = new URL(urlApi + "/top/courses/count")
   let params = new URLSearchParams(url.search)
   if (old_date) params.append("old_date", old_date)
   if (limit) params.append("limit", limit.toString())
   url.search = params.toString()

   return await axios.get(url.href)
}
