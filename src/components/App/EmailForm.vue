<template>
  <div class="Email">
    <qr-code-container></qr-code-container>
    <form class="Email-Form" @submit.prevent="submitForm" @reset="resetForm">
      <base-input v-model="email" placeholder="Email"></base-input>
      <base-input v-model="subject" placeholder="Subject"></base-input>
      <base-input v-model="message" placeholder="Message body"></base-input>
      <form-buttons></form-buttons>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref, defineComponent} from "vue";
import {useStore} from "vuex";

defineComponent({name: 'EmailForm'})

const {commit, dispatch} = useStore()

const email = ref<String | null>(null)
const subject = ref<String | null>(null)
const message = ref<String | null>(null)

const submitForm = async () => {
  let payload = `MATMSG:TO:${email.value};SUB:${subject.value};BODY:${message.value};;`
  dispatch("GENERATE_QR_CODE", payload)
}

const resetForm = () => commit('RESET_QR_CODE')
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

.Email {
  @include container;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  gap: 64px;
  background-color: #a3a3a3;

  &-Form {
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    //gap: 16px;
  }
}
</style>