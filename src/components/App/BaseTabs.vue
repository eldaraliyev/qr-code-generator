<script lang="ts">
export default {
  name: "base-tabs",
};
</script>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["toggleTab"])

const selectedTab = ref<string>("");
const options = ref<{label: string, value: string}[]>([
  { label: "Text", value: "simple-text-form" },
  { label: "URL", value: "url-form" },
  { label: "Wi-Fi", value: "wifiacc-form" },
  { label: "VCard ", value: "vcard-form" },
]);
const toggleTab = (val: any) => {
  emit("toggleTab", val.target.value);
};

</script>
<template>
  <div class="tabs">
    <div class="tabs__radio-group">
      <div v-for="option in options" :key="option.value">
        <label
          :for="option.value"
          class="tabs__radio-button"
          :class="selectedTab === option.value ? 'selected' : ''"
        >
          <input
            type="radio"
            class="tabs__radio-input"
            :id="option.value"
            :value="option.value"
            v-model="selectedTab"
            @input="toggleTab"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app";
.tabs {
  @include flex(center, center, row, 0.5rem);
  width: 100%;
  padding: 1.5rem 0;
  
  &__radio {
    &-group {
      @include flex(center, space-around, row, 1rem);
      flex-wrap: wrap;
    }
    &-button {
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 1rem;
      transition: $transition;
      &:hover {
        color: lighten($color: $font-tab, $amount: 5);
      }
    }
    &-input {
      display: none;
    }
  }
}
.selected {
  color: $font-tab;
}
.custom__tab {
  position: relative;
  &-checkbox {
    position: absolute;
    display: none;
  }
  &-label {
    transition: $transition;
    width: 100%;
   }
  &-checkbox:checked ~ .tabs {
    background-color: darken($color: #fff, $amount: 50);
    color: #fff;
  }
}
</style>
