<script lang="ts">
import { ref, computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "vcard-form",
  setup() {
    const store = useStore();
    const imageSrc = ref("");
    const formData = reactive({
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
    const resultGlobalData = computed(() => store.getters.handleResult);
    const payload = computed(() => {
      return `  BEGIN:VCARD 
VERSION:3.0
N:${formData.surname};${formData.name}
FN:${formData.name} ${formData.surname}
ORG:${formData.company}
TITLE:${formData.job_title}
ADR:;;${formData.street};${formData.city};${formData.state};${formData.zip};${formData.country}
TEL;WORK;VOICE:${formData.phone}
TEL;CELL:${formData.mobile}
TEL;FAX:${formData.fax}
EMAIL;WORK;INTERNET:${formData.email}
URL:${formData.website}
END:VCARD`;
    });
    const generateQr = async () => {
      store.dispatch("generateQrCode", payload.value);
      imageSrc.value = resultGlobalData.value;
    };
    // BEGIN:VCARD
    // VERSION:3.0
    // N:Aliyev;Eldar
    // FN:Eldar Aliyev
    // ORG:Hostart
    // TITLE:Front-end Dev
    // ADR:;;Chaykovski;Baku;Narimanov;1154;Azerbaijan
    // TEL;WORK;VOICE:+994125669398
    // TEL;CELL:+994553499610
    // TEL;FAX:
    // EMAIL;WORK;INTERNET:eldar.alv@gmail.com
    // URL:https://my-portfolio.com
    // END:VCARD
    return {
      payload,
      imageSrc,
      formData,
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
  <section id="form" class="form-container">
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
    <base-input
      id="phone-number"
      placeholder="Enter Phone Number"
      v-model="formData.phone"
    />
    <base-input
      id="email-address"
      placeholder="Enter Email Address"
      v-model="formData.email"
    />
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
    <base-input
      id="city-name"
      placeholder="Enter City Name"
      v-model="formData.city"
    />
    <base-input
      id="country-name"
      placeholder="Enter Country Name"
      v-model="formData.country"
    />
    <base-input
      id="personal-website"
      placeholder="Enter your Personal Website"
      v-model="formData.website"
    />
  </section>
  <base-button title="Generate" @click="generateQr" />
</template>
<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.placeholder {
  height: 200px;
  width: 200px;
  background: rgba($color: white, $alpha: 0.2);
}
</style>
