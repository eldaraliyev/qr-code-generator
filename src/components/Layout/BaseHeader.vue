<template>
  <header class="header">
    <div class="container">
      <img class="app-logo" src="../../assets/images/main-logo.svg" alt="logo"/>
      <mode-toggle></mode-toggle>
    </div>
  </header>
</template>
<script lang="ts">
import BaseModeToggle from "../../components/UI/BaseModeToggle.vue";

export default {
  components: {
    'mode-toggle': BaseModeToggle
  },
  name: "base-header",

};
</script>


<style lang="scss" scoped>
@import "../../assets/scss/variables";

.header {
  padding: 1rem;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

  }
}

html[data-theme="light"] {
  .header .app-logo {
    filter: invert(0);
  }


}

html[data-theme="dark"] {
  .header .app-logo {
    filter: invert(1);
  }
}
</style>
