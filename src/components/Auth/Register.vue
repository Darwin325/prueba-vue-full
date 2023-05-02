<script setup lang="ts">
import { RegisterHook } from "./RegisterHook"

const { registerUser, form } = RegisterHook()
</script>

<template>
   <div class="register">
      <div class="content-register">
         <div class="d-flex align-items-center">
            <router-link
               to="/login"
               class="nav-link"
               data-bs-toggle="tooltip"
               data-bs-placement="top"
               title="Volver al inicio de sesión"
               ><i class="bi bi-arrow-left-circle"></i
            ></router-link>

            <span class="fs-3">Registro</span>
         </div>

         <form @submit.prevent="registerUser" ref="form">
            <div class="mb-3">
               <label for="name" class="form-label">Name</label>
               <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  required
               />
            </div>

            <div class="mb-3">
               <label for="last_name" class="form-label">Apellidos</label>
               <input
                  type="text"
                  class="form-control"
                  name="last_name"
                  id="last_name"
                  required
               />
            </div>

            <div class="mb-3">
               <label for="email" class="form-label">Correo</label>
               <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  required
               />
            </div>

            <div class="mb-3">
               <label for="password" class="form-label">Contraseña</label>
               <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  required
               />
            </div>

            <div class="mb-3">
               <label for="password_confirmation" class="form-label"
                  >Confirmar contraseña</label
               >
               <input
                  type="password"
                  class="form-control"
                  name="password_confirmation"
                  id="password_confirmation"
                  required
               />
            </div>

            <div class="d-grid gap-2">
               <button type="submit" class="btn btn-success">
                  Registrarme
               </button>
            </div>
         </form>
      </div>
   </div>
</template>

<style scoped>
.register {
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   height: 80vh;
   max-width: 430px;
   padding: 15px;
   margin: auto;
}

i {
   font-size: 2rem;
   margin-right: 0.5rem;
}

.content-register {
   border: solid 1px #ccc;
   padding: 1rem;
   border-radius: 5px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
