import { axiosInstance as axios } from "../config/axios"

export const getStudents = async () => {
   return await axios.get("/students")
}
