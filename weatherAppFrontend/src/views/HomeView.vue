<template>
  <main class="container">
    <div class="pt-4 mb-8 relative flex flex-row">
      <input
        type="text"
        v-model="busca"
        name="busca"
        placeholder="Digite o nome de cidade"
        class="py-2 px-1 w-full bg-transparent border-b-gray-900 border-b-2 border-l-gray-900 border-l-2 rounded-lg focus:outline-none focus:bg-gray-300 focus:shadow-md focus:border-0"
      />
      <button
        type="button"
        class="mx-2 px-2 duration-200 font-semibold bg-slate-400 hover:bg-slate-700 hover:text-weather-text-hover rounded-md"
        @click="buscarLocalizações"
      >
        Pesquisar
      </button>
    </div>
    <ul v-if="resultadosGeolocation" class="relative rounded-md bg-slate-200">
      <p v-if="errorBusca">Algo deu errado, por favor tente novamente.</p>
      <!-- <p v-if="!errorBusca && resultadosGeolocation.length === 0">
        Sua busca não retornou nenhum resultado, verifique se digitou corretamente.
      </p> -->
      <template v-else>
        <li
          class="px-2 py-4 my-2 rounded-lg bx-3 text duration-200 bg-white hover:bg-slate-700 hover:text-weather-text-hover hover:font-semibold cursor-pointer"
          v-for="resultadosDaBusca in resultadosGeolocation"
          :key="resultadosDaBusca.id"
          @click="paginaCidade(resultadosDaBusca)"
        >
          {{ resultadosDaBusca.name }}, {{ resultadosDaBusca.state }},
          {{ resultadosDaBusca.country }}
        </li>
      </template>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


const router = useRouter()

const errorBusca = ref(null)
const busca = ref('')
const resultadosGeolocation = ref(null)
const buscarLocalizações = async () => {
  if (busca.value !== '') {
    try {
      const resultados = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${
          busca.value
        }&limit=${5}&appid=d0fdc863fa4a289abaa64a456bf44af9`
      )

      resultadosGeolocation.value = resultados.data
      busca.value = ''
    } catch (error) {
      errorBusca.value = true
    }
    return
  }

  resultadosGeolocation.value = null
}

const paginaCidade = (cidade) => {
  const { name, state, lat, lon } = cidade
  router.push({
    name: 'cityView',
    params: { estado: state, cidade: name },
    query: {
      lat: lat,
      lon: lon
    }
  })
}
</script>
