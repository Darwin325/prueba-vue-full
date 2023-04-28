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
            <th scope="col">Cursos</th>
         </tr>
      </thead>

      <tbody>
         <tr v-for="(student, index) in listStudents" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.lastName }}</td>
            <td>{{ student.email }}</td>
            <td>
               <span class="badge rounded-pill bg-danger">Eliminar</span
               >{{ " " }}
               <span class="badge rounded-pill bg-warning">Editar</span>
            </td>
            <td>
               <router-link
                  :to="{
                     name: 'StudentCourses',
                     params: { id: student.id },
                  }"
               >
                  <span
                     class="badge rounded-pill bg-success"
                     data-bs-toggle="tooltip"
                     data-bs-placement="left"
                     :title="'Ver los cursos asociados a ' + student.name"
                     >Ver</span
                  >
               </router-link>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scope></style>
