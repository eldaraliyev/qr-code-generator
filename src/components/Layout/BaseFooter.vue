<script lang="ts">
import BaseModeToggle from "../UI/BaseModeToggle.vue";
export default {
  name: "base-footer",
  components: { "mode-toggle": BaseModeToggle },
};
</script>
<template>
  <footer class="footer">
    <div class="container">
      {{
        `${new Date().getFullYear()} © Created with passion by Eldar Aliyev. 👨‍💻`
      }}
      <mode-toggle></mode-toggle>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  .container {
    padding: 1.5rem 0;
    max-width: 1140px;
    margin: 0 auto;
  }
}
</style>
