import { Course } from "../models/courses"

export const createCourseAdapter = (course: any): Course => {
   const time = JSON.parse(course.time)
   return {
      id: course.id,
      name: course.name,
      description: course.description,
      start_date: course.start_date,
      end_date: course.end_date,
      time,
   }
}
