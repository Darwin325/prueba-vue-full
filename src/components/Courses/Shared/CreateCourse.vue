<script setup lang="ts">
import { ModalSize } from "../../../models/modal"
import Modal from "../../Shared/Modal.vue"
import { HookCreateCourse } from "./HookCreateCourse"

const { addCourse, showModal, startDate, nowDate } = HookCreateCourse()
</script>

<template>
   <button class="btn btn-primary btn-sm" @click="showModal = true">
      Agregar curso
   </button>
   <Modal
      :show-modal="showModal"
      :modal-size="ModalSize.md"
      :close-button="false"
      @close="showModal = false"
   >
      <template #title> Agregar curso </template>

      <form @submit.prevent="addCourse">
         <div class="mb-3">
            <label for="txtName" class="form-label">Nombre</label>
            <input
               type="text"
               class="form-control"
               name="txtName"
               id="txtName"
               placeholder="Typescript.."
               required
            />
         </div>

         <div class="mb-3 row">
            <div class="col">
               <label for="starDate" class="form-label">Fecha de inicio</label>
               <input
                  type="date"
                  class="form-control"
                  id="starDate"
                  name="starDate"
                  :min="nowDate"
                  v-model="startDate"
                  required
               />
            </div>
            <div class="col">
               <label for="endDate" class="form-label">Fecha de fin</label>
               <input
                  type="date"
                  class="form-control"
                  id="endDate"
                  name="endDate"
                  :min="startDate || nowDate"
                  required
               />
            </div>
         </div>

         <div class="mb-3">
            <label for="txtDescription" class="form-label">Descripción</label>
            <textarea
               rows="3"
               type="text"
               class="form-control"
               id="txtDescription"
               name="txtDescription"
               placeholder="En este curso aprenderás las bases de Typescript..."
            ></textarea>
         </div>

         <div class="mb-3 row">
            <div class="col">
               <label for="startTime" class="form-label">Hora de inicio</label>
               <input
                  type="time"
                  class="form-control"
                  id="startTime"
                  name="startTime"
                  required
               />
            </div>
            <div class="col">
               <label for="endTime" class="form-label">Fecha de fin</label>
               <input
                  type="time"
                  class="form-control"
                  id="endTime"
                  name="endTime"
                  required
               />
            </div>
         </div>

         <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-success">Guardar</button>
         </div>
      </form>
   </Modal>
</template>

<style scoped></style>
