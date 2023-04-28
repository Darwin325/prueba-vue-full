import { defineStore } from "pinia"
import { Student } from "../models/students"
import { ref } from "vue"
import { getStudents } from "../services/Students"

export const useStudentsStore = defineStore("students", () => {
   const students = ref<Student[]>([])

   async function getStudentsList() {
      try {
         const response = await getStudents()
         const { data } = response.data
         students.value = data
      } catch (error) {
         console.log(error)
      }
   }

   return {
      getStudentsList,
      students,
   }
})
