<script setup lang="ts">
import { router } from "../../Routes/main"
import { logout } from "../../services/Auth"
import { useUserStore } from "../../store/UserStore"
import { HookPolicyUser } from "../../Policy/HookPolicyUser"
import { Roles } from "../../Policy/Roles"

const store = useUserStore()
const { can } = HookPolicyUser()

const closeSession = async () => {
   await logout()
   store.setIsLogged(false)
   await router.push({ name: "Login" })
}
</script>

<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
         <a class="navbar-brand" href="#"></a>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
               </li>

               <li class="nav-item">
                  <router-link class="nav-link" to="/courses"
                     >Cursos</router-link
                  >
               </li>

               <li class="nav-item" v-if="can([Roles.ADMIN])">
                  <router-link class="nav-link" to="/students"
                     >Estudiantes</router-link
                  >
               </li>

               <li class="nav-item" v-if="can([Roles.STUDENT])">
                  <router-link
                     class="nav-link"
                     :to="{
                        name: 'StudentCourses',
                        params: { id: store.myData.id },
                     }"
                     >Mis cursos</router-link
                  >
               </li>
            </ul>
            <div class="nav-item ms-auto">
               <a class="nav-link" href="#" @click="closeSession"
                  >Cerrar sesión</a
               >
            </div>
         </div>
      </div>
   </nav>
</template>

<style scoped></style>
