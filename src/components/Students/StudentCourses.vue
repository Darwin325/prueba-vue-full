<script setup lang="ts">
import CardCourse from "../Courses/CardCourse.vue"
import Modal from "../Shared/Modal.vue"
import { ModalSize } from "../../models/modal"
import { HookStudentCourse } from "./HookStudentCourse"

const { student, showModal, distinctCourses, courses } = HookStudentCourse()
</script>

<template>
   <div class="d-flex justify-content-between mt-3">
      <h2>Cursos del estudiante {{ student.name }}</h2>
      <button class="btn btn-success" @click="showModal = !showModal">
         Agregar curso
      </button>
   </div>

   <div class="row mt-5">
      <CardCourse v-for="course in courses" :key="course.id" :course="course" />
   </div>

   <Modal
      :show-modal="showModal"
      @close="showModal = false"
      :modal-size="ModalSize.xl"
   >
      <template #title> Agregar cursos a: {{ student.name }} </template>

      <div class="row">
         <CardCourse
            v-for="course in distinctCourses"
            :key="course.id"
            :course="course"
         >
            <div class="row mt-3">
               <div class="d-flex justify-content-center">
                  <button class="btn btn-success btn-sm">Agregar</button>
               </div>
            </div>
         </CardCourse>
      </div>
   </Modal>
</template>

<style scope></style>
