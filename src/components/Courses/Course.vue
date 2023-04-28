<script setup lang="ts">
import CardCourse from "./CardCourse.vue"
import { HookCourse } from "./HookCourse"

const { courses, getCoursesList } = HookCourse()

getCoursesList()
</script>

<template>
   <h2 class="text-center mb-5 mt-3">Listado de cursos</h2>

   <div class="row">
      <CardCourse v-for="course in courses" :course="course" />
   </div>
</template>

<style scope></style>
