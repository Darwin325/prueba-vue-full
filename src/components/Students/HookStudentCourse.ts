import { useCourseStore } from "../../store/CoursesStore"
import { createStudentAdapter } from "../../adapters/StudentAdapter"
import { useRoute } from "vue-router"
import { computed, ref } from "vue"
import { useStudentsStore } from "../../store/StudentsStore"
import { createCourseAdapter } from "../../adapters/CourseAdapter"
import { Course } from "../../models/courses"
import { HookPolicyUser } from "../../Policy/HookPolicyUser"
import { storeToRefs } from "pinia"

const { can, Roles } = HookPolicyUser()

export const HookStudentCourse = () => {
   const routeParams = useRoute().params
   const storeStudent = useStudentsStore()
   const courseStore = useCourseStore()
   const showModal = ref(false)

   const { addStudentToCourseStore, getStudentCoursesList } = storeStudent
   const { getCoursesList } = courseStore

   const { studentCourses } = storeToRefs(storeStudent)

   getStudentCoursesList(parseInt(routeParams.id as string))

   const student = computed(() => {
      return createStudentAdapter(studentCourses as any)
   })

   const courses = computed(() => {
      return storeStudent.studentCourses?.courses.map((course) => {
         return createCourseAdapter(course)
      }) as Course[]
   })

   const addCourse = async (courseId: number) => {
      if (!confirm("¿Esta seguro que desea agregar el curso?")) return
      try {
         await addStudentToCourseStore(
            parseInt(routeParams.id as string),
            courseId
         )
         alert("Curso agregado correctamente")
      } catch (error) {
         console.log(error)
      }
   }

   getCoursesList()

   const distinctCourses = computed(() => {
      return courseStore.courses.filter((course) => {
         return !courses.value.find((myCourse) => myCourse.id === course.id)
      })
   })

   return {
      showModal,
      student,
      distinctCourses,
      courses,
      addCourse,
      can,
      Roles,
   }
}
