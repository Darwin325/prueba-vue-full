<script setup
    lang="ts">
import NabBar from './components/Shared/NavBar.vue'
</script>

<template>
  <NabBar />
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped></style>
