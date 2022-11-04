<script lang="ts">
export default {
  name: "base-footer",
};
</script>
<template>
  <footer class="footer">
    <div class="container">
      {{
        `${new Date().getFullYear()} © Created with passion by Eldar Aliyev.`
      }}
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
