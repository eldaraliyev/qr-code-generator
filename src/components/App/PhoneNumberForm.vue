<template>
  <div class="PhoneNumber">
    <qr-code-container/>
    <form @submit.prevent="submitForm">
      <base-input id="phone-number"
                  input-type="text"
                  v-model="phoneNumberData"
                  inputmode="tel"
                  placeholder="Phone Number"></base-input>
      <form-buttons></form-buttons>
    </form>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";

defineComponent({
  name: "PhoneNumberForm",
})
const store = useStore()
const phoneNumberData = ref<string>('')
const submitForm = () => {
  store.dispatch("GENERATE_QR_CODE", encodeURIComponent(phoneNumberData.value));

}
</script>

<style scoped>

</style>