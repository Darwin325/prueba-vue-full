<script setup lang="ts">
import { Course } from "../../models/courses"
import { defineProps } from "vue"

const props = defineProps<{
   course: Course
}>()
</script>
<template>
   <div class="col-4 mb-5">
      <div class="card">
         <div class="card-header">
            <h3>{{ course.name }}</h3>
         </div>

         <div class="card-body">
            <p>{{ course.description }}</p>
            <p>Inicio del curso: {{ course.start_date }}</p>
            <div class="row">
               <div class="col-6">
                  Hora inicio:
                  <span class="badge bg-primary">{{ course.time.start }}</span>
               </div>
               <div class="col-6">
                  Hora fin:
                  <span class="badge bg-primary"> {{ course.time.end }}</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scope></style>
