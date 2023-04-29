<script setup lang="ts">
import { useCourseStore } from "../store/CoursesStore"
import CardCourse from "./Courses/CardCourse.vue"
const courseStore = useCourseStore()

courseStore.getTopCoursesList({})
</script>

<template>
   <h2>Top cursos</h2>

   <div class="home-courses">
      <CardCourse
         v-for="course in courseStore.topCourses"
         :key="course.id"
         :course="course"
      >
         <div class="mt-3">
            <span class="badge bg-info text-dark"
               >Cantidad de estudiantes: {{ course.studentsCount }}</span
            >
         </div>
      </CardCourse>
   </div>
</template>

<style scoped>
.home-courses {
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}
</style>
