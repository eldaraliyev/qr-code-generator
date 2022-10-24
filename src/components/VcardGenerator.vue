<script lang="ts">
import { ref, computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "vcard-generator",
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
      return `BEGIN:VCARD
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
      imageSrc,
      formData,
      generateQr,
    };
  },
});
</script>
<template>
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">First Name:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="First Name"
        v-model="formData.name"
      />
    </div>
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Last Name:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Last Name"
        v-model="formData.surname"
      />
    </div>
    <!-- <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Mobile Number"
        v-model="formData.mobile"
      />
    </div> -->
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Phone:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Phone Number"
        v-model="formData.phone"
      />
    </div>
    <!-- <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Fax"
        v-model="formData.fax"
      />
    </div> -->
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Email:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Email"
        v-model="formData.email"
      />
    </div>
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Company:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Company"
        v-model="formData.company"
      />
    </div>
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Your Job:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Job Title"
        v-model="formData.job_title"
      />
    </div>
    <!-- <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Street"
        v-model="formData.street"
      />
    </div> -->
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">City:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="City"
        v-model="formData.city"
      />
    </div>
    <!-- <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Zip Code"
        v-model="formData.zip"
      />
    </div>
    <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="State"
        v-model="formData.state"
      />
    </div> -->
    <div class="form-group">
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Country"
        v-model="formData.country"
      />
    </div>
    <div class="form-group">
      <!-- <label class="form__group-label" for="simple-text">Website:</label> -->
      <input
        id="simple-text"
        class="form__group-input"
        type="text"
        name="simple-text"
        placeholder="Personal Website"
        v-model="formData.website"
      />
    </div>
  <!-- <button @click="generateQr">Generate</button> -->
  <div class="second-wrapper">
    <div class="form-result">
      <img v-if="imageSrc" :src="imageSrc" alt="result" width="150" />
      <div v-else class="placeholder"></div>
    </div>
  </div>
</template>
<style scoped></style>
