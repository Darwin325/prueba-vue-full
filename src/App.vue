<script setup lang="ts">
import NabBar from "./components/Shared/NavBar.vue"
import { useUserStore } from "./store/UserStore"
import { getToken } from "./utils/token"
import { getUser } from "./utils/userLocalStore"
const userStore = useUserStore()
userStore.setIsLogged(!!getToken() && !!getUser())
</script>

<template>
   <NabBar v-if="userStore.isLogged" />
   <div class="container">
      <router-view />
   </div>
</template>

<style scoped></style>
