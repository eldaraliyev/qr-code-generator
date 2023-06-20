<template>
  <div class="FormButtons">
    <base-button type="submit" class="btn-primary" title="Create"/>
    <base-button type="reset" title="Clear"/>
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from "vue";

defineComponent({name: 'FormButtons'})
</script>

<style lang="scss" scoped>
.FormButtons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
</style>