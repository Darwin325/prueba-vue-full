import { useCourseStore } from "../../store/CoursesStore"
import { storeToRefs } from "pinia"

export const HookCourse = () => {
   const storeCourse = useCourseStore()
   const { getCoursesList } = storeCourse
   const { courses } = storeToRefs(storeCourse)

   return { getCoursesList, courses }
}
