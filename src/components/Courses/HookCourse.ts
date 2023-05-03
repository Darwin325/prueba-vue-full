import { useCourseStore } from "../../store/CoursesStore"
import { storeToRefs } from "pinia"
import { HookPolicyUser } from "../../Policy/HookPolicyUser"

export const HookCourse = () => {
   const storeCourse = useCourseStore()
   const { getCoursesList } = storeCourse
   const { courses } = storeToRefs(storeCourse)
   const { can, Roles } = HookPolicyUser()

   return { getCoursesList, courses, can, Roles }
}
