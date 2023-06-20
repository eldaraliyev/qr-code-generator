<template>
  <div class="SimpleText">
    <qr-code-container/>
    <form @submit.prevent="submitForm" @reset="resetForm">
      <div class="SimpleText-Form">
        <base-input v-model="targetData" placeholder="Your text"></base-input>
        <form-buttons></form-buttons>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";

defineComponent({name: 'SimpleTextForm'})
const {commit, dispatch} = useStore();

const targetData = ref<unknown>(null);

const submitForm = async () => {
  dispatch("GENERATE_QR_CODE", targetData.value);
};
const resetForm = () => commit('RESET_QR_CODE')
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

.SimpleText {
  background-color: #a3a3a3;
  //width: 768px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  gap: 64px;
  &-Form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
}
</style>
