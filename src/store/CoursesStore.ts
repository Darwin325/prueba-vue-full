import { defineStore } from "pinia"
import { ref } from "vue"
import { Course } from "../models/courses"
import { getCourses } from "../services/Courses"
import { createCourseAdapter } from "../adapters/CourseAdapter"

export const useCourseStore = defineStore("course", () => {
   const courses = ref<Course[]>([])

   async function getCoursesList() {
      try {
         const response = await getCourses()
         const { data } = response.data
         courses.value = data.map((course: Course) =>
            createCourseAdapter(course)
         )
      } catch (e) {
         console.log(e)
      }
   }

   return { courses, getCoursesList }
})
