import { useCourseStore } from "../../store/CoursesStore"
import { createStudentAdapter } from "../../adapters/StudentAdapter"
import { useRoute } from "vue-router"
import { computed, ref } from "vue"
import { useStudentsStore } from "../../store/StudentsStore"
import { createCourseAdapter } from "../../adapters/CourseAdapter"
import { Course } from "../../models/courses"

export const HookStudentCourse = () => {
   const routeParams = useRoute().params
   const storeStudent = useStudentsStore()
   const courseStore = useCourseStore()
   const showModal = ref(false)

   storeStudent.getStudentCoursesList(parseInt(routeParams.id as string))

   const student = computed(() => {
      return createStudentAdapter(storeStudent.studentCourses as any)
   })

   const courses = computed(() => {
      return storeStudent.studentCourses?.courses.map((course) => {
         return createCourseAdapter(course)
      }) as Course[]
   })

   courseStore.getCoursesList()

   const distinctCourses = computed(() => {
      return courseStore.courses.filter((course) => {
         return !courses.value.find((myCourse) => myCourse.id === course.id)
      })
   })

   return { showModal, student, distinctCourses, courses }
}
