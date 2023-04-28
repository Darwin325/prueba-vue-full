import { axiosInstance as axios } from "../config/axios"

export const getStudents = async () => {
   return await axios.get("/students")
}

export const getStudentCourses = async (id: number) => {
   return await axios.get(`/students/${id}/courses`)
}

export const addStudentToCourse = async (
   studentId: number,
   courseId: number
) => {
   return await axios.post(`/students/${studentId}/courses`, {
      course_id: courseId,
   })
}
