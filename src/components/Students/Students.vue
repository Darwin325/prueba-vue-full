<script setup lang="ts">
import TableStudents from "./TableStudents.vue"
import { useStudentsStore } from "../../store/StudentsStore"
const studentStore = useStudentsStore()
studentStore.getStudentsList()
</script>

<template>
   <h1>Estudiantes</h1>

   <TableStudents :students="studentStore.students" />
</template>

<style scope></style>
