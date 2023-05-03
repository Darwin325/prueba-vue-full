<script setup lang="ts">
import CardCourse from "./CardCourse.vue"
import { HookCourse } from "./HookCourse"
import CreateCourse from "./Shared/CreateCourse.vue"

const { courses, getCoursesList, can, Roles } = HookCourse()

getCoursesList()
</script>

<template>
   <div
      class="d-flex flex-wrap justify-content-between align-item-center mt-3 mb-4"
   >
      <h2>Cursos</h2>
      <CreateCourse v-if="!can([Roles.STUDENT])" />
   </div>

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
