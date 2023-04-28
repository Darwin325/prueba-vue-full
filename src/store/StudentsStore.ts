import { defineStore } from "pinia"
import { Student, StudentCourses } from "../models/students"
import { ref } from "vue"
import {
   addStudentToCourse,
   getStudentCourses,
   getStudents,
} from "../services/Students"

export const useStudentsStore = defineStore("students", () => {
   const students = ref<Student[]>([])
   const studentCourses = ref<StudentCourses>()

   async function getStudentsList() {
      try {
         const response = await getStudents()
         const { data } = response.data
         students.value = data
      } catch (error) {
         console.log(error)
      }
   }

   async function getStudentCoursesList(id: number) {
      try {
         const response = await getStudentCourses(id)
         const { data } = response.data
         studentCourses.value = data
      } catch (error) {
         console.log(error)
      }
   }

   async function addStudentToCourseStore(studentId: number, courseId: number) {
      try {
         const response = await addStudentToCourse(studentId, courseId)
         const { data } = response.data
         getStudentCoursesList(studentId)
         return data
      } catch (error) {
         console.log(error)
      }
   }

   return {
      getStudentsList,
      students,
      getStudentCoursesList,
      studentCourses,
      addStudentToCourseStore,
   }
})
