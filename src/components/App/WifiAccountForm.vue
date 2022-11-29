<script lang="ts">
export default {
  name: "wifiacc-form",
};
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const secureType = ref<"nopass" | "WEP" | "WPA" | "">("");
const network_name = ref<string>("");
const password = ref<string>("");
const isHidden = ref<boolean>(false);
let imageSrc = ref<string>("");

let resultGlobalData = computed(() => store.getters.handleResult);
watch(resultGlobalData, (val: string) => (imageSrc.value = val));

const generateQr = async () => {
  let payload = `WIFI:T:${secureType.value};S:${network_name.value};P:${password.value};H:${isHidden.value}`;
  store.dispatch("generateQrCode", payload);
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
    <div class="main__input">
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
      <div class="security__protocol">
        <p class="security__protocol-label">Security Protocol:</p>
        <div class="security__protocol-buttons">
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
@import "@/assets/scss/app.scss";
.main__input {
  margin-top: 1rem;
}
.row {
  @include flex(center, space-between, row, 0);
  flex-wrap: wrap;
  &.m-1 {
    margin: 1rem;
  }
  &.mt-0 {
    margin-top: 0;
  }
}

.security__protocol {
  @include flex(center, center, row, 1.5rem);
  &-buttons {
    @include flex(center, center, row, 0.5rem);
  }
}
.placeholder {
  @include size(200px, 200px);
  background: lighten($color: $placeholder, $amount: 5);
}
@media screen and (max-width: 575px) {
  .main__input {
    @include flex(center, center, column, 0);
    margin: 1rem
  }
  .row {
    @include flex(center, space-between, column, 0);
  }
  .security__protocol {
    flex-direction: column;
    &-label {
      margin-top: 2rem;
    }
    &-buttons {
      gap: 1rem;
      margin-bottom: 1rem;
    }    
  }
}
</style>
