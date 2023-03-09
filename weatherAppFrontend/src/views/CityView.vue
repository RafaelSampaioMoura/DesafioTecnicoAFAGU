<template>
  <div>
    <Suspense
      ><AsyncCityView />
      <template #fallback>
        <div class="flex w-full h-full justify-center">
          <p class="pt-10 text-xl text-weather-text-hover font-bold opacity-50">Carregando...<div class="lds-dual-ring"></div></p>
          
        </div> </template
    ></Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from './AsyncCityView.vue'
</script>

<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-block;
  width: 36px;
  height: 36px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #FF3C03;
  border-color: #FF3C03 transparent #FF3C03 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
