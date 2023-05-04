<script setup lang="ts">
import { storeToRefs } from "pinia"
import NabBar from "./components/Shared/NavBar.vue"
import { useUserStore } from "./store/UserStore"
import { getToken } from "./utils/token"
import { getUser } from "./utils/userLocalStore"
const userStore = useUserStore()
const { isLogged } = storeToRefs(userStore)
userStore.setIsLogged(!!getToken() && !!getUser())
</script>

<template>
   <NabBar v-if="isLogged" />
   <div class="container">
      <router-view />
   </div>
</template>

<style scoped></style>
