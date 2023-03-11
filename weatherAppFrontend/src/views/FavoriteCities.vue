<template>
  <div>
    <div v-if="cidadesForamFavoritadas">
      <div>Elas foram.</div>
    </div>
    <div v-else>Elas não foram.</div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const cidadesForamFavoritadas = ref(localStorage.getItem('cidadesFavoritadas'))
</script>

<style lang="scss" scoped></style>
