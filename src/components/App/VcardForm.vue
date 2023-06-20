<template>
  <div class="VCard">
    <qr-code-container/>
    <form class="VCard-Form" @submit.prevent="submitForm" @reset="resetForm">
      <section id="personal-data">
        <h3 class="Section-Title">Personal Data</h3>

        <base-input
            id="first-name"
            placeholder="First Name"
            v-model="formData.name"
        />
        <base-input
            id="last-name"
            placeholder="Last Name"
            v-model="formData.surname"
        />
        <base-input
            id="phone-number"
            inputmode="tel"
            placeholder="Phone Number"
            v-model="formData.phone"
        />
        <base-input
            id="email-address"
            inputmode="email"
            placeholder="Email"
            v-model="formData.email"
        />
        <base-input
            id="personal-website"
            inputmode="url"
            placeholder="Personal website"
            v-model="formData.website"
        />
        <base-input id="city" placeholder="City" v-model="formData.city"/>
        <base-input
            id="country"
            placeholder="Country"
            v-model="formData.country"
        />
      </section>

      <section id="company-data">
        <h3 class="Section-Title">Company</h3>
        <base-input
            id="company-name"
            placeholder="Company"
            v-model="formData.company"
        />
        <base-input
            id="job-title"
            placeholder="Job title"
            v-model="formData.job_title"
        />
      </section>

      <form-buttons></form-buttons>
    </form>
  </div>
</template>

<script setup lang="ts">
import {reactive, computed, defineComponent} from "vue";
import type Vcard from "../../types/vcard";
import {useStore} from "vuex";

defineComponent({name: 'VcardForm'})
const store = useStore();

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

const submitForm = async () => {
  store.dispatch("GENERATE_QR_CODE", payload.value);
};

const resetForm = () => {
  store.commit('RESET_QR_CODE')
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

.VCard {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: 64px;
  @include container;
  &-Form {
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 16px;
  }
}

.Section-Title {
  font-weight: 700;
  font-size: 16px;
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

:where(#company-data) {
  margin-top: 16px !important;
}
</style>
