<template>
  <Teleport to="body">
    <div
      v-show="infoBoxActive"
      class="absolute w-full h-full bg-black text-black bg-opacity-30 top-0 left-0 flex justify-center px-8 justify-items-center"
    >
      <div
        class="p-4 bg-white self-start mt-32 max-w-screen-md border-weather-text border-4 rounded-md flex flex-col"
      >
        <slot />
        <button
          @click="$emit('close-info-box')"
          type="button"
          class="mt-8 py-2 px-6 flex justify-center bg-slate-700 text-weather-text-hover hover:bg-weather-text-hover hover:text-slate-900 duration-200 cursor-pointer rounded-lg"
        >
          <p>Close</p>
          <i class="material-icons pl-2">cancel</i>
        </button>
      </div>
    </div></Teleport
  >
</template>

<script setup>
import { Teleport } from 'vue'

defineEmits(['close-info-box'])
defineProps({
  infoBoxActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
