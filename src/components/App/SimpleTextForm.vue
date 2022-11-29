<script lang="ts">
export default {
  name: "simple-text-form",
};
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const targetData = ref<unknown>(null);
const imageSrc = ref<string>("");

// QR-code state from store, watcher for state update
const resultGlobalData = computed(() => store.getters.handleResult);
watch(resultGlobalData, (val: string) => (imageSrc.value = val));

const generateQr = async () => {
  store.dispatch("generateQrCode", targetData.value);
  imageSrc.value = resultGlobalData.value;
};
</script>

<template>
  <section id="result">
    <div class="form-result">
      <img v-if="imageSrc" :src="imageSrc" alt="result" width="200" />
      <div v-else class="placeholder"></div>
    </div>
  </section>
  <section id="form">
    <div class="form-group">
      <base-input
        id="simple-text"
        v-model="targetData"
        placeholder="Enter text"
      ></base-input>
    </div>
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
.placeholder {
  @include size(200px, 200px);
  background: lighten($color: $placeholder, $amount: 5);
}
</style>
