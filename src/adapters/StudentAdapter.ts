import { Student } from "../models/students"
import { createUserAdapter } from "./UserAdapter"

export const createStudentAdapter = (student: Student) => {
   const adapted = createUserAdapter(student)
   return adapted
}
