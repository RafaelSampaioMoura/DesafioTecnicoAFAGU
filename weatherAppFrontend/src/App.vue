<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-Lexend bg-slate-200">
    <SiteHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
