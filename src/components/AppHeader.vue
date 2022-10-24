<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'app-header',
  setup() {
    return {};
  },
});
</script>

<template>
  <header class="header">
    <div class="container">
      <img class="app-logo" src="../assets/images/main-logo.svg" alt="logo" />
      <p class="logo-subtitle">Vue + Typescript Project</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 0 0.75rem;
  .container {
    margin: auto;
    .app-logo {
      filter: invert(0);
    }
    .logo-subtitle {
      line-height: 1.5;
      font-weight: bold;
      font-size: 1rem;
    }
  }
}
</style>
