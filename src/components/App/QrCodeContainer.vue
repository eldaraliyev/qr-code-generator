<template>
  <transition mode="out-in">
    <img v-if="qr_code" :src="qr_code" alt="qr-code" width="150" height="150">
    <svg v-else width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="150" fill="#D9D9D9"/>
      <rect x="56.4717" y="55.9056" width="43.283" height="31.9623" stroke="#AAAAAA" stroke-width="2"/>
      <rect x="49.6793" y="61.566" width="43.283" height="31.9623" stroke="#AAAAAA" stroke-width="2"/>
    </svg>
  </transition>
</template>

<script lang="ts">
export default {
  name: "QrCodeContainer"
}
</script>

<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

const {getters, commit} = useStore()
const qr_code = computed(() => getters.GET_QR_CODE)
</script>

<style lang="scss" scoped>
.placeholder {
  height: 150px;
  width: 150px;
  background-color: #a3a3a3;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>