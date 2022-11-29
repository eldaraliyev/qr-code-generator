<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isDark = computed(() => store.getters.isDark);
const toggleLayout = () => store.dispatch("toggleLayout");
const initLayout = () => store.dispatch("initLayout");
initLayout();
</script>

<template>
  <button class="toggle" @click="toggleLayout">
    <span v-if="!isDark" class="toggle-content">🌞 Light</span>
    <span v-else class="toggle-content">🌙 Dark</span>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/app";
.toggle {
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 1rem;
  padding: .5rem 1rem;
  border: none;
  outline: none;
  border-radius: .5rem;
  transition: $transition;
  box-shadow: $box-shadow;
  html[data-theme="light"] & {
    background-color: $bg-button-mode;
    &:hover {
      background-color: darken($color: $bg-button-mode, $amount: 5);
    }
    &-content {
      color: $font-color;
    }
  }
  html[data-theme="dark"] & {
    background-color: $bg-button-mode-dark;
    &:hover {
      background-color: darken($color: $bg-button-mode-dark, $amount: 5);
    }
    &-content {
      color: $font-color-dark;
    }
  }
  &-content {
    font-size: 1rem;
  }
}
</style>
