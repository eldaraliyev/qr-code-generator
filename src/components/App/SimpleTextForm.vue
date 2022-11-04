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
    <base-input
      id="simple-text"
      v-model="targetData"
      placeholder="Enter text"
    ></base-input>
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
.placeholder {
  height: 200px;
  width: 200px;
  background: rgba($color: white, $alpha: 0.2);
}
</style>
