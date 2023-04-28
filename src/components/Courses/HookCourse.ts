import { useCourseStore } from "../../store/CoursesStore"

export const HookCourse = () => {
   const { courses, getCoursesList } = useCourseStore()

   return { getCoursesList, courses }
}
