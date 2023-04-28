import { axiosInstance as axios } from "../config/axios"

export const getCourses = async () => {
   return await axios.get("/courses")
}

export const getTopCourses = async () => {
   return await axios.get("/top/courses/count")
}
