<template>
  <button v-bind="$attrs" class="btn btn-primary" @click="handleClick">
    {{ title }}
  </button>
</template>

<script lang="ts">
export default {
  name: "base-button",
};
</script>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

defineProps({
  title: String,
});
const emit = defineEmits(["btnClick"]);

function handleClick(e: Event) {
  emit("btnClick");
}
</script>


<style lang="scss">
@import "../../assets/scss/variables";

.btn {
  all: unset;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  border-radius: 1rem;
  padding: 0.75rem 2rem;
  transition: $transition;
  box-shadow: $box-shadow;
  background-color: $bg-button;
  color: $font-button;
  &:hover {
    background-color: #4F1CA3;
  }
  &[type='reset'] {
    background-color: #e35d60;
  }
}
</style>
