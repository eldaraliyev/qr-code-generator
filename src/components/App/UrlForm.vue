<script lang="ts">
export default {
  name: "url-form",
};
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const urlData = ref<string>("");
const imageSrc = ref<string>("");
const isError = ref<boolean>(false);

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const regex = new RegExp(urlRegex);

let resultGlobalData = computed(() => store.getters.handleResult);
watch(resultGlobalData, (val: string) => (imageSrc.value = val));

const generateQr = () => {
  if (urlData.value.match(regex)) {
    const payload = urlData.value;
    isError.value = false;
    store.dispatch("generateQrCode", payload);
  } else {
    imageSrc.value = "";
    isError.value = true;
  }
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
        id="website"
        input-type="url"
        v-model="urlData"
        placeholder="Enter your URL"
      ></base-input>
      <span class="input__error" v-if="isError"
        >Your link does not match the valid link pattern</span
      >
    </div>
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
@import "../../assets/scss/global";
.form-group {
  @include flex(left, start, column, 0);
}
.input__error {
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: $error-message;
}
.placeholder {
  @include size(200px, 200px);
  background: lighten($color: $placeholder, $amount: 5)
}
</style>
