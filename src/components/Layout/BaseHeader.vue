<script lang="ts">
export default {
  name: "base-header",
};
</script>

<template>
  <header class="header">
    <div class="container">
      <img class="app-logo" src="@/assets/images/main-logo.svg" alt="logo" />
      <p class="logo-subtitle">Create your own QR-code 👇</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.header {
  padding: 1.5rem 0 0.75rem;
  .container {
    margin: auto;

    .logo-subtitle {
      line-height: 2;
      font-weight: 800;
      font-size: 1rem;
    }
  }
}
html[data-theme="light"] {
  .header .app-logo {
    filter: invert(1);
  }
  .logo-subtitle {
    color: $font-color;
  }
}
html[data-theme="dark"] {
  .header .app-logo {
    filter: invert(0);
  }
  .logo-subtitle {
    color: $font-color-dark;
  }
}
</style>
