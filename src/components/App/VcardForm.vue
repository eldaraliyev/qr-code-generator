<script lang="ts">
export default {
  name: "vcard-form",
};
</script>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import Vcard from "../../types/vcard";
import { useStore } from "vuex";

const store = useStore();

const imageSrc = ref<string>("");
const formData = reactive<Vcard>({
  name: "",
  surname: "",
  mobile: "",
  phone: "",
  fax: "",
  email: "",
  company: "",
  job_title: "",
  street: "",
  city: "",
  zip: "",
  state: "",
  country: "",
  website: "",
});
const payload = computed(() => {
  return `BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A${formData.surname}%3B${formData.name}%0AFN%3A${formData.name}%20${formData.surname}%0AORG%3A${formData.company}%0ATITLE%3A${formData.job_title}%0AADR%3A%3B%3B${formData.street}%3B${formData.city}%3B${formData.state}%3B${formData.zip}%3B${formData.country}%0ATEL%3BWORK%3BVOICE%3A%0ATEL%3BCELL%3A${formData.phone}%0ATEL%3BFAX%3A%0AEMAIL%3BWORK%3BINTERNET%3A${formData.email}%0AURL%3A${formData.website}%0AEND%3AVCARD%0A
  `;
});

const resultGlobalData = computed(() => store.getters.handleResult);
watch(resultGlobalData, (val: string) => (imageSrc.value = val));

const generateQr = async () => {
  store.dispatch("generateQrCode", payload.value);
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
  <section id="form" class="form-container">
    <div class="input-group">
      <base-input
        id="first-name"
        placeholder="Enter First Name"
        v-model="formData.name"
      />
      <base-input
        id="last-name"
        placeholder="Enter Last Name"
        v-model="formData.surname"
      />
    </div>
    <div class="input-group">
      <base-input
        id="phone-number"
        inputmode="tel"
        placeholder="Enter Phone Number"
        v-model="formData.phone"
      />
      <base-input
        id="email-address"
        inputmode="email"
        placeholder="Enter Email Address"
        v-model="formData.email"
      />
    </div>
    <div class="input-group">
      <base-input
        id="company-name"
        placeholder="Enter Company Name"
        v-model="formData.company"
      />
      <base-input
        id="job-title"
        placeholder="Enter your Job Title"
        v-model="formData.job_title"
      />
    </div>
    <div class="input-group">
      <base-input id="city" placeholder="Enter City" v-model="formData.city" />
      <base-input
        id="country"
        placeholder="Enter Country"
        v-model="formData.country"
      />
    </div>
    <div class="input-personal-website">
      <base-input
        id="personal-website"
        inputmode="url"
        placeholder="Enter your Personal Website"
        v-model="formData.website"
      />
    </div>
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
@import "../../assets/scss/global";
.form-container {
  @include flex(start, space-evenly, row, 0);
  flex-wrap: wrap;
  max-width: 700px;
  margin: 1rem 0;
}
.input-personal-website {
  width: 100%;
}
.input-group {
  @include flex(center, center, row, 0);
  flex-wrap: wrap;
}
.placeholder {
  @include size(200px, 200px);
  background: lighten($color: $placeholder, $amount: 5);
}
</style>
