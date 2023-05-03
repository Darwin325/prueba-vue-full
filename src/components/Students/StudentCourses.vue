<script setup lang="ts">
import CardCourse from "../Courses/CardCourse.vue"
import Modal from "../Shared/Modal.vue"
import { ModalSize } from "../../models/modal"
import { HookStudentCourse } from "./HookStudentCourse"

const { student, showModal, distinctCourses, courses, addCourse, can, Roles } =
   HookStudentCourse()
</script>

<template>
   <div
      v-if="!can([Roles.STUDENT])"
      class="d-flex justify-content-between mt-3"
   >
      <h2>Cursos del estudiante {{ student.name }}</h2>
      <button class="btn btn-success" @click="showModal = !showModal">
         Agregar curso a este estudiante
      </button>
   </div>

   <div v-else class="d-flex justify-content-between mt-3">
      <h2>Mis cursos</h2>

      <button class="btn btn-success" @click="showModal = !showModal">
         Inscribirme a un curso
      </button>
   </div>

   <h2
      class="d-flex justify-content-center align-items-center vh"
      v-if="courses.length === 0"
   >
      Usted aún no se inscrito a ningún curso.
   </h2>

   <div class="student-courses mt-5">
      <CardCourse v-for="course in courses" :key="course.id" :course="course" />
   </div>

   <Modal
      :show-modal="showModal"
      @close="showModal = false"
      :modal-size="ModalSize.xl"
   >
      <template #title> Agregar cursos a: {{ student.name }} </template>

      <h2 v-if="distinctCourses.length === 0">No hay cursos para mostrar</h2>

      <div class="student-courses" v-else>
         <CardCourse
            v-for="course in distinctCourses"
            :key="course.id"
            :course="course"
         >
            <div class="row mt-3">
               <div class="d-flex justify-content-center">
                  <button
                     class="btn btn-success btn-sm"
                     @click="addCourse(course.id as number)"
                  >
                     Agregar
                  </button>
               </div>
            </div>
         </CardCourse>
      </div>
   </Modal>
</template>

<style scope>
.student-courses {
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}

.vh {
   height: 70vh;
}
</style>
