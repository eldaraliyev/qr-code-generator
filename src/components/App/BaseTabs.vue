<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "base-tabs",
  emits: ["toggleTab"],
  setup(_, { emit }) {
    const selectedTab = ref("");
    const options = ref([
      { label: "Simple Text", value: "simple-text-form" },
      { label: "URL", value: "url-form" },
      { label: "Wi-Fi Sharing", value: "wifiacc-form" },
      { label: "VCard ", value: "vcard-form" },
    ]);
    const toggleTab = (val: any) => {
      emit("toggleTab", val.target.value);
    };

    return { options, selectedTab, toggleTab };
  },
});
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
$hover: darken(
  $color: #fff,
  $amount: 10,
);
.tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem 0;

  &__radio {
    &-group {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 1rem;
    }
    &-button {
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: all 250ms ease 0s;
      &:hover {
        box-shadow: 0 1px 2px rgba(56, 65, 74, 0.15);
        color: #9499ff;
      }
    }
    &-input {
      display: none;
    }
  }
}
.selected {
  color: #9499ff;
}
.custom__tab {
  position: relative;
  &-checkbox {
    position: absolute;
    display: none;
  }
  &-label {
    transition: 0.25s;
    width: 100%;
    // @extend %button_style;
    // background-color: red;
  }
  &-checkbox:checked ~ .tabs {
    background-color: darken($color: #fff, $amount: 50);
    color: #fff;
  }
}
</style>
