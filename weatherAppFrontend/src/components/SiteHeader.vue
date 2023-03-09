<template>
  <header class="sticky top-0 bg-slate-700">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-weather-text-hover py-6">
      <RouterLink :to="{ path: '/' }">
        <div
          class="flex items-center gap-3 flex-1 hover:text-weather-text hover:opacity-50 duration-200 cursor-pointer"
        >
          <i class="material-icons text-2xl"> cloud</i>
          <p>AFAGU Weather App</p>
        </div></RouterLink
      >
      <div class="flex gap-3 flex-1 justify-end">
        <i
          class="material-icons hover:opacity-50 duration-200 hover:text-weather-text cursor-pointer"
          @click="toggleInfoBox"
          >info</i
        >
        <i
          class="material-icons hover:opacity-50 duration-200 hover:text-weather-text cursor-pointer"
          >add_circle_outline</i
        >
      </div>

      <BaseModal :info-box-active="infoBoxActive" @close-info-box="toggleInfoBox">
        <h1>
          <h2 class="text-xl font-semibold pt-3">Sobre:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ornare accumsan.
            Suspendisse potenti. Ut quis ante ut tellus iaculis.
          </p>
          <h2 class="text-xl font-semibold pt-3">Como Utilizar:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ornare accumsan.
            Suspendisse potenti. Ut quis ante ut tellus iaculis.
          </p>
          <h2 class="text-xl font-semibold pt-3">Favoritar:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus ornare accumsan.
            Suspendisse potenti. Ut quis ante ut tellus iaculis.
          </p>
        </h1></BaseModal
      >
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import BaseModal from './BaseModal.vue'

const infoBoxActive = ref(null)
const toggleInfoBox = () => {
  infoBoxActive.value = !infoBoxActive.value
}
</script>
