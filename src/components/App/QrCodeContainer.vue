<template>
  <div class="ImageContainer">
    <transition mode="out-in">
      <img v-if="qr_code" :src="qr_code" alt="qr-code" width="200" height="200">
      <svg v-else width="200" height="200" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" fill="#D9D9D9"/>
        <rect x="56.4717" y="55.9056" width="43.283" height="31.9623" stroke="#AAAAAA" stroke-width="2"/>
        <rect x="49.6793" y="61.566" width="43.283" height="31.9623" stroke="#AAAAAA" stroke-width="2"/>
      </svg>
    </transition>
    <transition>
      <base-button class="DownloadBtn" :download-icon="true" v-show="isButtonAvailable" title="Download"></base-button>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {ref, computed, defineComponent, watch} from "vue";

defineComponent({
  name: "QrCodeContainer"
})
const {getters, commit} = useStore()
const qr_code = computed(() => getters.GET_QR_CODE)

const isButtonAvailable = ref<Boolean>(false)

watch(qr_code, (val) => {
  setTimeout(() => {
    isButtonAvailable.value = !!val
  }, 2000)
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

.ImageContainer {
  position: relative;

  .DownloadBtn {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
  }

  .placeholder {
    height: 150px;
    width: 150px;
    background-color: #a3a3a3;
  }
}

@include component-transition

</style>