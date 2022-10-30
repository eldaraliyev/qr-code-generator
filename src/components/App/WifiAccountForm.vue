<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "wifiacc-form",
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
    <div class="row">
      <base-input
        id="network-name"
        placeholder="Enter Network Name"
        v-model="network_name"
      />
      <base-input
        id="password"
        placeholder="Enter Network Password"
        v-model="password"
      ></base-input>
    </div>
    <div class="row m-1 mt-0">
      <div class="custom-checkbox">
        <div class="checkbox">
          <input
            type="checkbox"
            class="checkbox-hidden"
            name="hidden"
            id="ishidden"
            v-model="isHidden"
          />
          <img src="../../assets/images/checkbox.svg" alt="" />
        </div>
        <label for="ishidden"> Hidden Network </label>
      </div>
      <div class="radio__group">
        <p class="radio__group-label">Security Protocol:</p>
        <div class="radio__group-buttons">
          <input
            type="radio"
            name="none"
            id="none"
            value="nopass"
            v-model="secureType"
          />
          <label for="none"> None</label>
          <input
            type="radio"
            name="wep"
            id="wep"
            value="WEP"
            v-model="secureType"
          />
          <label for="wep"> WEP</label>
          <input
            type="radio"
            name="wpa"
            id="wpa"
            value="WPA"
            v-model="secureType"
          />
          <label for="wpa"> WPA/WPA2</label>
        </div>
      </div>
    </div>
    <base-button title="Generate" @click="generateQr" />
  </section>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &.m-1 {
    margin: 0 1rem 1rem 1rem;
  }
}

.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.checkbox {
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 1px solid #333333de;
  border-radius: 0.25rem;
  position: relative;
  img {
    width: 75%;
    height: 75%;
    opacity: 0;
    transition: all 100ms;
  }
  &-hidden {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    margin: 0;
    opacity: 0;
  }
  &-hidden:checked ~ img {
    opacity: 1;
  }
}
input[type="radio"] {
  opacity: 0;
  position: absolute;
}
input[type="radio"] + label {
  position: relative;
  display: inline-block;
  padding-left: 1.5rem;
  &::before {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    border: 1px solid #333333de;
    border-radius: 50%;
    top: 0;
    left: 0;
    background-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    background-color: #445FE8;
    transition: all 200ms;
  }
}
input[type='radio']:not(:checked) + label::after {
  opacity: 0; 
  -webkit-transform: scale(0);
  transform: scale(0);
}
input[type='radio']:checked + label::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.radio__group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
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
</style>
