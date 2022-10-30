<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "simple-text-form",
  setup() {
    const store = useStore();
    const someData = ref(null);
    const imageUrl = ref("");
    let imageSrc = ref("");
    let resultGlobalData = computed(() => store.getters.handleResult);
    const onInput = (e: any) => store.commit("saveResult", e.target.value);
    watch(resultGlobalData, (val: string) => (imageSrc.value = val));
    const generateQr = async () => {
      store.dispatch("generateQrCode", someData.value);
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
  <section id="result">
    <div class="form-result">
      <img v-if="imageSrc" :src="imageSrc" alt="result" width="200" />
      <div v-else class="placeholder"></div>
    </div>
  </section>
  <section id="form">
    <base-input
      id="simple-text"
      v-model="someData"
      placeholder="Enter text here"
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
