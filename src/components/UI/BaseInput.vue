<script lang="ts">
export default {
  name: "base-input",
};
</script>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: String,
  value: String,
  id: String,
  inputType: String,
});

const emit = defineEmits(["input"]);

const inputVal = ref<unknown>(props.value);
function handleInput() {
  emit("input", inputVal.value);
}
</script>

<template>
  <input
    autocomplete="off"
    :type="inputType"
    :id="id"
    class="input-field"
    v-model="inputVal"
    @input="handleInput"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.input-field {
  font-size: 1rem;
  min-width: 250px;
  max-width: 100%;
  padding: 1rem 1.125rem;
  margin: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  transition: $transition;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
}
html[data-theme="light"] {
  .input-field {
    background-color: $bg-input;
    color: $font-input;
    &::placeholder {
      color: $font-input-placeholder;
      transition: $transition;
    }
    &:focus {
    outline: none;
    &::placeholder {
      color: $font-input-placeholder-focus;
    }
  }
  }
}
html[data-theme="dark"] {
  .input-field {
    background-color: $bg-input-dark;
    color: $font-input-dark;
    &::placeholder {
      color: $font-input-dark-placeholder;
      transition: $transition;
    }
    &:focus {
    outline: none;
    &::placeholder {
      color: $font-input-dark-placeholder-focus;
    }
  }
  }
}
</style>
