import { ref } from "vue"
import { Course } from "../../../models/courses"
import { useCourseStore } from "../../../store/CoursesStore"

export const HookCreateCourse = () => {
   const courseStore = useCourseStore()
   const { createCourseStore } = courseStore

   const showModal = ref(false)
   const nowDate = new Date().toISOString().split("T")[0]
   const startDate = ref<string>()

   const adapData = (data: any): Course => {
      return {
         name: data.txtName,
         description: data.txtDescription,
         start_date: data.starDate,
         end_date: data.endDate,
         time: {
            start: data.startTime,
            end: data.endTime,
         },
      }
   }

   const addCourse = async (event: Event) => {
      try {
         const form = event.target as HTMLFormElement
         const formData = new FormData(form)
         const data = Object.fromEntries(formData.entries())
         const adaptedData = adapData(data)
         await createCourseStore(adaptedData)
         showModal.value = false
         alert("Curso creado correctamente")
         form.reset()
      } catch (error) {
         console.log(error)
      }
   }

   return { showModal, addCourse, startDate, nowDate }
}
