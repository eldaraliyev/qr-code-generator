<script lang="ts">
export default {
  name: "base-button",
};
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  title: String,
});
const emit = defineEmits(["btnClick"]);
function handleClick(e: Event) {
  emit("btnClick");
}
</script>

<template>
  <button v-bind="$attrs" class="btn btn-primary" @click="handleClick">
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.btn {
  min-width: 250px;
  max-width: 250px;
  transition: $transition;
  cursor: pointer;
  border: 0;
  font: inherit;
  box-shadow: $box-shadow;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  &-primary {
    html[data-theme="light"] & {
      background-color: $bg-button;
      color: $font-button;
      &:hover {
        background-color: darken($color: $bg-button, $amount: 5);
      }
    }
    html[data-theme="dark"] & {
      background-color: $bg-button-dark;
      color: $font-button-dark;
      &:hover {
        background-color: darken($color: $bg-button-dark, $amount: 5);
      }
    }
  }
}
</style>
