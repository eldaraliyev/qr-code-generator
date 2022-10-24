<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "simple-generator",
  setup() {
    const store = useStore();
    const someData = ref(null);
    const imageUrl = ref("");
    let imageSrc = ref("");
    let resultGlobalData = computed(() => store.getters.handleResult);
    const onInput = (e: any) => store.commit("saveResult", e.target.value);
    watch(resultGlobalData, (val: string) => (imageSrc.value = val));
    const generateQr = async (e: any) => {
      const data = e.target.value;
      store.dispatch("generateQrCode", data);
      imageUrl.value = resultGlobalData.value;
    };
    return {
      someData,
      generateQr,
      onInput,
      resultGlobalData,
      imageUrl,
      imageSrc,
    };
  },
});
</script>

<template>
  <div class="second-wrapper">
    <div class="form-result">
      <img v-if="imageSrc" :src="imageSrc" alt="result" width="200" />
      <div v-else class="placeholder"></div>
    </div>
  </div>
  <div class="first-wrapper">
    <div class="form__group">
      <!-- <label class="form__group-label" for="simple-text">Any Text:</label> -->
      <input
        id="simple-text"
        autocomplete="off"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Enter your text here"
        @keyup.enter="generateQr"
        v-model="someData"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.placeholder {
  height: 200px;
  width: 200px;
  background: rgba($color: white, $alpha: 0.2); 
}
</style>
