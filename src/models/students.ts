import { Course } from "./courses"
import { User } from "./user"

export interface Student extends User {}

export interface StudentCourses extends Student {
   courses: Course[]
}
