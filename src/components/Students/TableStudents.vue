<script setup lang="ts">
import { Student } from "../../models/students"
import { computed, defineProps } from "vue"
import { createStudentAdapter } from "../../adapters/StudentAdapter"

const props = defineProps<{ students: any }>()

const listStudents: Student[] = computed<Student[]>(() => {
   return props.students.data?.map((student: Student) => {
      return createStudentAdapter(student)
   })
})
</script>

<template>
   <table class="table table-striped table-hover">
      <thead>
         <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
         </tr>
      </thead>

      <tbody>
         <tr v-for="(student, index) in listStudents" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.lastName }}</td>
            <td>{{ student.email }}</td>
            <td>
               <button class="btn btn-primary">Editar</button>{{ " " }}
               <button class="btn btn-danger">Eliminar</button>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scope></style>
