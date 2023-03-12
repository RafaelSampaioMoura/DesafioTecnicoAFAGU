<template>
  <div class="text-xl mt-8 flex justify-center font-semibold text-slate-800">
    <div v-if="!cidadesForamFavoritadas || cidadesFavoritadas.length === 0">
      <p>Você não está favoritou nenhuma cidade.</p>
    </div>
    <div class="w-full" v-else>
      <div v-for="favorita in cidadesFavoritadas" class="flex">
        <p
          @click="paginaCidade(favorita)"
          class="w-full px-2 py-4 my-2 rounded-lg bx-3 text duration-200 bg-white hover:bg-slate-700 hover:text-weather-text-hover hover:font-semibold cursor-pointer"
        >
          {{ favorita.cidade }}, {{ favorita.estado }}
        </p>
        <i
          @click="desfavoritarCidade(favorita)"
          class="material-icons px-4 py-4 m-2 rounded-lg bx-3 duration-200 bg-white hover:bg-slate-700 hover:text-weather-text-hover hover:font-semibold cursor-pointer"
          >delete</i
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cidadesForamFavoritadas = ref(localStorage.getItem('cidadesFavoritadas'))

const cidadesFavoritadas = ref(JSON.parse(localStorage.getItem('cidadesFavoritadas')))

const paginaCidade = (favorita) => {
  const {
    cidade,
    estado,
    cords: { lat, lon }
  } = favorita
  router.push({
    name: 'cityView',
    params: { estado: estado, cidade: cidade },
    query: {
      lat: lat,
      lon: lon
    }
  })
}

const desfavoritarCidade = (cidade) => {
  const {
    cords: { lat, lon }
  } = cidade

  const favoritos = JSON.parse(localStorage.getItem('cidadesFavoritadas'))
  const novoFavoritos = favoritos.filter(({ cords }) => !(cords.lat === lat && cords.lon === lon))

  localStorage.setItem('cidadesFavoritadas', JSON.stringify(novoFavoritos))
  cidadesFavoritadas.value = JSON.parse(localStorage.getItem('cidadesFavoritadas'))
  console.log(cidadesFavoritadas)
}
</script>

<style lang="scss" scoped></style>
