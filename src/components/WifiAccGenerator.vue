<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "wifiacc-generator",
  setup() {
    const secureType = ref("");
    const network_name = ref(null);
    const password = ref(null);
    const isHidden = ref(false);
    const store = useStore();
    let imageSrc = ref("");
    let resultGlobalData = computed(() => store.getters.handleResult);
    watch(resultGlobalData, (val) => (imageSrc.value = val));
    const generateQr = async () => {
      let payload = `WIFI:T:${secureType.value};S:${network_name.value};P:${password.value};H:${isHidden.value}`;
      store.dispatch("generateQrCode", payload);
    };
    return {
      imageSrc,
      secureType,
      network_name,
      password,
      isHidden,
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
      id="network-name"
      placeholder="Enter Network Name"
      v-model="network_name"
    />
    <label for="ishidden">
      <input type="checkbox" name="hidden" id="ishidden" v-model="isHidden" />
      Hidden Network
    </label>
    <base-input
      id="password"
      placeholder="Enter Network Password"
      v-model="password"
    ></base-input>
    <div class="radio__group">
      <p class="radio__group-label">Security Protocol:</p>
      <div class="radio__group-buttons">
        <label for="none">
          <input
            type="radio"
            name="none"
            id="none"
            value="nopass"
            v-model="secureType"
          />None</label
        >
        <label for="wep">
          <input
            type="radio"
            name="wep"
            id="wep"
            value="WEP"
            v-model="secureType"
          />WEP</label
        >
        <label for="wpa">
          <input
            type="radio"
            name="wpa"
            id="wpa"
            value="WPA"
            v-model="secureType"
          />WPA/WPA2</label
        >
      </div>
      <base-button title="Generate" @click="generateQr" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form__group__inline {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
}
.radio__group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  &-label {
  }
  &-buttons {
    display: flex;
    gap: 0.5rem;
  }
}
.placeholder {
  height: 200px;
  width: 200px;
  background: rgba($color: white, $alpha: 0.2);
}
.generate__button {
  margin-top: 1.5rem;
}
</style>
