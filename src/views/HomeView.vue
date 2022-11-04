<script lang="ts">
export default {
  name: "HomeView",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

const selectedComponent = ref<string>("simple-text-form");
const toggleComponent = (val: string) => (selectedComponent.value = val);
</script>

<template>
  <div class="home">
    <base-tabs @toggle-tab="toggleComponent"></base-tabs>
    <Transition mode="out-in">
      <div class="card">
        <component :is="selectedComponent" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
