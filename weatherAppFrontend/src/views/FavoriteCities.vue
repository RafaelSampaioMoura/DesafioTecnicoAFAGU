<template>
  <div>
    <div v-if="cidadesForamFavoritadas">
      <div v-for="favorita in cidadesFavoritadas">
        <p>{{ favorita.estado }}, {{ favorita.cidade }}</p>
      </div>
    </div>
    <div v-else>Elas não foram.</div>
  </div>
</template>

<script setup>
// import axios from 'axios'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'

const cidadesForamFavoritadas = ref(localStorage.getItem('cidadesFavoritadas'))

const cidadesFavoritadas = JSON.parse(localStorage.getItem('cidadesFavoritadas'))
</script>

<style lang="scss" scoped></style>
