<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "url-generator",
  setup() {
    const urlData = ref("");
    const store = useStore();
    let imageSrc = ref("");
    let error = ref("");
    let urlRegex =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    let regex = new RegExp(urlRegex);
    let resultGlobalData = computed(() => store.getters.handleResult);
    watch(resultGlobalData, (val) => (imageSrc.value = val));

    const generate = (e: any) => {
      const data = e.target.value;
      if (urlData.value.match(regex)) {
        error.value = "";
        const payload = urlData.value;
        store.dispatch("generateQrCode", payload);
      } else {
        error.value = "Your link does not match the valid link pattern";
        imageSrc.value = "";
        console.log("error");
      }
    };
    return {
      error,
      imageSrc,
      urlData,
      generate,
    };
  },
});
</script>
<template>
  <div class="form__group">
    <input
      id="simple-text"
      class="form__group-input"
      type="text"
      name="simple-text"
      placeholder="http://your-url"
      v-model="urlData"
      @keyup.enter="generate"
    />
  </div>
  <span class="error">{{ error }}</span>
  <div class="second-wrapper">
    <div class="form-result">
      <img v-if="imageSrc" :src="imageSrc" alt="result" width="150" />
      <div v-else class="placeholder"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.error {
  font-size: 0.875rem;
  margin-top: -0.5rem;
}
</style>
