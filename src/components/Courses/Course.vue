<script setup lang="ts">
import CardCourse from "./CardCourse.vue"
import { HookCourse } from "./HookCourse"

const { courses, getCoursesList } = HookCourse()

getCoursesList()
</script>

<template>
   <h2 class="text-center mb-5 mt-3">Listado de cursos</h2>

   <div class="course-courses">
      <CardCourse v-for="course in courses" :course="course" />
   </div>
</template>

<style scope>
.course-courses {
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}
</style>
