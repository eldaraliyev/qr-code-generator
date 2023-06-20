<template>
  <header class="Header">
    <div class="Header-Body">
      <img class="app-logo" src="../../assets/images/main-logo.svg" alt="logo"/>
      <localization-toggle></localization-toggle>
      <base-mode-toggle></base-mode-toggle>
    </div>
  </header>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({name: 'BaseHeader'})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

.Header {
  padding: 1rem;

  &-Body {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

  }
}

html[data-theme="light"] {
  .Header .app-logo {
    filter: invert(0);
  }


}

html[data-theme="dark"] {
  .Header .app-logo {
    filter: invert(1);
  }
}

@include media-query(sm) {
  .Header {
    width: 100%;
  }
}

@include media-query(md) {
  .Header {
    width: 100%;
  }
}

</style>
