import { defineStore } from "pinia"
import { ref } from "vue"
import { Course, TopCourses } from "../models/courses"
import { createCourse, getCourses, getTopCourses } from "../services/Courses"
import {
   createCourseAdapter,
   createTopCourseAdapter,
} from "../adapters/CourseAdapter"

export const useCourseStore = defineStore("course", () => {
   const courses = ref<Course[]>([])
   const topCourses = ref<TopCourses[]>([])

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

   async function getTopCoursesList({
      old_date,
      limit,
   }: {
      old_date?: string
      limit?: number
   }) {
      try {
         const response = await getTopCourses({ old_date, limit })
         const { data } = response.data
         topCourses.value = data.map((course: Course) =>
            createTopCourseAdapter(course)
         )
      } catch (e) {
         console.log(e)
      }
   }

   async function createCourseStore(course: Course) {
      try {
         await createCourse(course)
         await getCoursesList()
      } catch (e) {
         console.log(e)
      }
   }

   return {
      courses,
      getCoursesList,
      getTopCoursesList,
      topCourses,
      createCourseStore,
   }
})
