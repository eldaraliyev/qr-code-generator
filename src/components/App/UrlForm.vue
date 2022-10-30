<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "url-form",
  setup() {
    const urlData = ref("");
    const store = useStore();
    let imageSrc = ref("");
    let isError = ref(false)
    let urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    let regex = new RegExp(urlRegex);
    let resultGlobalData = computed(() => store.getters.handleResult);
    watch(resultGlobalData, (val) => (imageSrc.value = val));

    const generateQr = () => {
      if (urlData.value.match(regex)) {
        const payload = urlData.value;
        isError.value = false
        store.dispatch("generateQrCode", payload);
      } else {
        imageSrc.value = "";
        isError.value = true
        console.log("error");
      }
    };
    return {
      imageSrc,
      isError,
      urlData,
      generateQr,
    };
  },
});
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
      id="url"
      v-model="urlData"
      placeholder="Enter your URL"
    ></base-input>
    <span class="form-group__error" v-if="isError"
      >Your link does not match the valid link pattern</span
    >
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
.form-group__error {
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: rgba(255, 0, 0, 0.8);
}
.placeholder {
  height: 200px;
  width: 200px;
  background: rgba($color: white, $alpha: 0.2);
}
</style>
