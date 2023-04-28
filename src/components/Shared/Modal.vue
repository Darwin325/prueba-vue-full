<script setup lang="ts">
import { defineProps, withDefaults } from "vue"
import { ModalSize } from "../../models/modal"
const props = withDefaults(
   defineProps<{
      showModal: boolean
      modalSize: ModalSize
   }>(),
   {
      showModal: false,
      modalSize: ModalSize.sm,
   }
)

const emit = defineEmits<{ (e: "close"): void }>()

const closeModal = () => {
   props.showModal = false
   emit("close")
}
</script>

<template>
   <!-- Button trigger modal -->
   <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
   >
      Launch demo modal
   </button> -->
   <div
      v-if="showModal"
      class="modal-backdrop fade show"
      bis_skin_checked="1"
   ></div>
   <!-- Modal -->
   <div
      :class="['modal fade', +showModal && ' show']"
      :style="{ display: showModal ? 'block' : 'none' }"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
   >
      <div :class="['modal-dialog modal-dialog-centered modal-' + modalSize]">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">
                  <slot name="title">Modal title</slot>
               </h5>
               <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="closeModal"
               ></button>
            </div>
            <div class="modal-body">
               <slot>Modal body</slot>
            </div>
            <div class="modal-footer">
               <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="closeModal"
                  emit="closeModal"
               >
                  Close
               </button>
               <!-- <button type="button" class="btn btn-primary">
                  Save changes
               </button> -->
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
