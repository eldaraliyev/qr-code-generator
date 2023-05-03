<template>
  <qr-code-container/>
  <form @submit.prevent="generateQr">
    <base-input v-model="targetData" placeholder="Enter text"></base-input>
    <base-button type="submit" title="Create"/>
    <base-button type="reset" title="Reset"/>
  </form>
</template>

<script lang="ts">
export default {
  name: "simple-text-form",
};
</script>

<script setup lang="ts">
import {ref, computed, watch} from "vue";
import {useStore} from "vuex";
import QrCodeContainer from "../../components/App/QrCodeContainer.vue";

const store = useStore();

const targetData = ref<unknown>(null);
const imageSrc = ref<string>("");

// QR-code state from store, watcher for state update
const resultGlobalData = computed(() => store.getters.GET_QR_CODE);
watch(resultGlobalData, (val: string) => (imageSrc.value = val));

const generateQr = async () => {
  store.dispatch("GENERATE_QR_CODE", targetData.value);
  imageSrc.value = resultGlobalData.value;
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

</style>
