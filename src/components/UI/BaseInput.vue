<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "base-input",
  emits: ["input"],
  props: {
    placeholder: {
      type: String,
      default: "Enter text here",
    },
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    inputType: {
      type: String,
      default: 'text'
    },
  },
  setup(props, { emit }) {
    const inputVal = ref(props.value);
    function handleInput() {
      emit("input", inputVal.value);
    }
    return { inputVal, handleInput };
  },
});
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
.input-field {
  font-size: 1rem;
  min-width: 250px;
  max-width: 100%;
  background-color: #333333de;
  padding: 1rem 1.125rem;
  margin: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  caret-color: #fff;
  transition: all 300ms;
  color: #eee;
  &::placeholder {
    color: #ccc;
    transition: all 300ms;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: #777;
    }
  }
}
</style>
