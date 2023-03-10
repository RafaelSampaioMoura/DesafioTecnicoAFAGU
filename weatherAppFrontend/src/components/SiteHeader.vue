<template>
  <header class="sticky top-0 bg-slate-700">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-weather-text-hover py-6"
    >
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
          @click="favoritarCidade"
          class="material-icons hover:opacity-50 duration-200 hover:text-weather-text cursor-pointer"
          >{{ addSymbol }}</i
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
import { RouterLink, useRoute } from 'vue-router'
import BaseModal from './BaseModal.vue'

const router = useRoute()

const addSymbol = ref('add_circle_outline')
const infoBoxActive = ref(null)
const toggleInfoBox = () => {
  infoBoxActive.value = !infoBoxActive.value
}

const favoritarCidade = () => {
  if (!localStorage.getItem('cidadesFavoritadas')) {
    localStorage.setItem(
      'cidadesFavoritadas',
      JSON.stringify([
        {
          estado: router.params.estado,
          cidade: router.params.cidade,
          cords: {
            lan: router.params.lan,
            lon: router.params.lon
          }
        }
      ])
    );

    addSymbol.value = "info";
  } else {
    const cidadesFavoritadas = JSON.parse(localStorage.getItem('cidadesFavoritadas'))

    const alreadySaved = cidadesFavoritadas.find(
      (cidade) => cidade.estado === router.params.estado && cidade.cidade === router.params.cidade
    )

    if (alreadySaved) {
      cidadesFavoritadas.filter(
        (cidade) =>
          !(cidade.estado === router.params.estado && cidade.cidade === router.params).cidade
      )
    } else {
      cidadesFavoritadas.push({
        estado: router.params.estado,
        cidade: router.params.cidade,
        cords: {
          lan: router.params.lan,
          lon: router.params.lon
        }
      })

      localStorage.setItem('cidadesFavoritadas', cidadesFavoritadas)
    }
  }
}
</script>
