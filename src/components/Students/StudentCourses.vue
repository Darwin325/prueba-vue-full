<script setup lang="ts">
import { useRoute } from "vue-router"
import { computed } from "vue"
const routeParams = useRoute().params
import { useStudentsStore } from "../../store/StudentsStore"
import CardCourse from "../Courses/CardCourse.vue"
import { createCourseAdapter } from "../../adapters/CourseAdapter"
import { Course } from "../../models/courses"

const storeStudent = useStudentsStore()
storeStudent.getStudentCoursesList(parseInt(routeParams.id as string))
const courses = computed(() => {
   return storeStudent.studentCourses?.courses.map((course) => {
      return createCourseAdapter(course)
   }) as Course[]
})
</script>

<template>
   <h2>Cursos del estudiante {{ storeStudent.studentCourses?.name }}</h2>
   <div class="row mt-5">
      <CardCourse v-for="course in courses" :key="course.id" :course="course" />
   </div>
</template>

<style scope></style>
