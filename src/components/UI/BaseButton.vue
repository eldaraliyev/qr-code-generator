<script lang="ts">
export default {
  name: "base-button",
};
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
});
const emit = defineEmits(["btnClick"]);
function handleClick() {
  emit("btnClick");
}
</script>

<template>
  <button v-bind="$attrs" class="btn btn-primary" @click="handleClick">
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  min-width: 250px;
  max-width: 250px;
  transition: all 150ms;
  cursor: pointer;
  border: 0;
  font: inherit;
  box-shadow: 0 1px 2px rgba(56, 65, 74, 0.15);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  &-primary {
    background-color: #333333de;
    color: #ffffffde;
    &:hover {
      background-color: darken($color: #333333de, $amount: 5);
    }
  }
}
</style>
