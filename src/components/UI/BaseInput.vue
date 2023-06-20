<template>
  <input
      class="InputField"
      autocomplete="off"
      :type="inputType"
      :id="id"
      v-model="inputVal"
      @input="handleInput"
      :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import {ref, defineProps, defineEmits, defineComponent} from "vue";

defineComponent({name: 'BaseInput'})
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

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/mixins";

.InputField {
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  width: 100%;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: $transition;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
}

@include layout(light) {
  .InputField {
    background-color: $bg-input;
    color: $font-input;

    &::placeholder {
      color: $font-input-placeholder;
      transition: $transition;
      font-weight: 500;
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: $font-input-placeholder-focus;
      }
    }
  }
}

@include layout(dark) {
  .InputField {
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
