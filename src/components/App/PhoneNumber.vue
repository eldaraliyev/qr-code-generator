<template>
  <div class="PhoneNumber">
    <qr-code-container/>
    <form @submit.prevent="submitForm">
      <base-input id="phone-number"
                  input-type="text"
                  v-model="phoneNumberData"
                  inputmode="tel"
                  placeholder="Enter Phone Number"></base-input>
      <base-button type="submit" title="Generate"></base-button>
      <base-button type="reset" title="Reset"></base-button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "PhoneNumber",
}
</script>
<script setup lang="ts">
import BaseInput from "../UI/BaseInput.vue";
import {ref} from "vue";
import BaseButton from "../UI/BaseButton.vue";
import qrCodeContainer from "../App/QrCodeContainer.vue";
import {useStore} from "vuex";

const store = useStore()
const phoneNumberData = ref<string>('')
const submitForm = () => {
  store.dispatch("GENERATE_QR_CODE", phoneNumberData.value);

}
</script>

<style scoped>

</style>