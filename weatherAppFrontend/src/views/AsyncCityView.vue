<template>
  <div class="flex flex-1 flex-col items-center">
    <div class="p-4 w-full text-center">
      Se você quiser acompanhar o clima dessa cidade, por favor clique no ícone "+"
    </div>
    <i
      @click="favoritarCidade"
      class="material-icons hover:opacity-50 duration-200 hover:text-weather-text cursor-pointer"
      >{{ addSymbol }}</i
    >
    <div class="flex flex-col items-center py-12 font-semibold">
      <h1 class="text-xl">{{ route.params.cidade }}, {{ route.params.estado }}</h1>
      <p>
        {{
          new Date(dadosClima.data.dt * 1000).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'short',
            weekday: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          })
        }}
      </p>

      <div class="py-4 flex flex-col flex-1 justify-center text-xl text-center">
        <p class="text-8xl my-4">{{ Math.round(dadosClima.data.main.temp) }}°C</p>
        <p>Sensação térmica: {{ Math.round(dadosClima.data.main.feels_like) }}°C</p>
        <p>Umidade: {{ dadosClima.data.main.humidity }} g/m³</p>
        <p>Pressão Atmosférica: {{ dadosClima.data.main.pressure / 1000 }} atm</p>

        <div class="flex flex-col text-center justify-center align-middle my-4">
          <p>
            {{ String(dadosClima.data.weather[0].description).toUpperCase() }}
          </p>
          <p>
            <img
              class="box-border h-auto w-24 bg-slate-700 my-5 ml-auto mr-auto rounded-md"
              :src="`https://openweathermap.org/img/wn/${dadosClima.data.weather[0].icon}@2x.png`"
              alt=""
            />
          </p>
        </div>
      </div>

      <hr class="border-slate-700 border-opacity-50 border w-full" />

      <div class="max-w-screen-md w-full py-12">
        <div class="mx-8">
          <h2 class="mb-4">Próximos 5 Dias:</h2>
          <div class="overflow-x-scroll flex">
            <div
              v-for="previsão in previsãoClima.data.list"
              :key="previsão.dt"
              class="flex flex-col gap-2"
            >
              <p class="w-24">
                {{
                  new Date(previsão.dt * 1000).toLocaleDateString('pt-BR', {
                    weekday: 'short',
                    day: 'numeric',
                    hour: 'numeric'
                  })
                }}
              </p>
              <img
                :src="`https://openweathermap.org/img/wn/${previsão.weather[0].icon}@2x.png`"
                alt=""
                class="h-24"
              />
              <p>
                {{ Math.round(previsão.main.temp_min) }}° /
                {{ Math.round(previsão.main.temp_max) }}°
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <p v-for="previsão in previsãoClima.data.list">
        {{
          new Date(previsão.dt * 1000).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'short',
            weekday: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          })
        }}
      </p> -->
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const addSymbol = ref('add_circle_outline')

const route = useRoute()
const pegarPrevisãoClima = async () => {
  try {
    const previsãoClima =
      await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${route.query.lat}&lon=${route.query.lon}&appid=d0fdc863fa4a289abaa64a456bf44af9&lang=pt_br&units=metric
`)

    return previsãoClima
  } catch (error) {
    console.log(error)
  }
}

const pegarDadosClima = async () => {
  try {
    const dadosClima = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lon}&appid=d0fdc863fa4a289abaa64a456bf44af9&lang=pt_br&units=metric`
    )

    return dadosClima
  } catch (error) {
    console.log(error)
  }
}

const previsãoClima = await pegarPrevisãoClima()
const dadosClima = await pegarDadosClima()
console.log(previsãoClima)
console.log(dadosClima)

const favoritarCidade = () => {
  if (!localStorage.getItem('cidadesFavoritadas')) {
    const { params: {estado, cidade}, query: lan, lon} = route
    localStorage.setItem(
      'cidadesFavoritadas',
      JSON.stringify([
        {
          estado: estado,
          cidade: cidade,
          cords: {
            lan: lan,
            lon: lon
          }
        }
      ])
    )

    addSymbol.value = 'check'
  } else {
    const cidadesFavoritadas = JSON.parse(localStorage.getItem('cidadesFavoritadas'))

    const alreadySaved = cidadesFavoritadas.find(
      (cidade) => cidade.estado === route.params.estado && cidade.cidade === route.params.cidade
    )

    if (alreadySaved) {
      cidadesFavoritadas.filter(
        (cidade) =>
          !(cidade.estado === route.params.estado && cidade.cidade === route.params).cidade
      )
    } else {
      cidadesFavoritadas.push({
        estado: route.params.estado,
        cidade: route.params.cidade,
        cords: {
          lan: route.query.lan,
          lon: route.query.lon
        }
      })

      localStorage.setItem('cidadesFavoritadas', cidadesFavoritadas)
    }
  }
}
</script>

<style lang="scss" scoped></style>
