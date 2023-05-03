<template>
  <main class="container">
    <base-tabs v-show="false" @toggle-tab="toggleComponent"></base-tabs>
    <mobile-dropdown @select-mode="toggleComponent"></mobile-dropdown>
    <Transition mode="out-in">
      <div class="card">
        <component :is="selectedComponent" />
      </div>
    </Transition>
  </main>
</template>
<script lang="ts">
export default {
  name: "HomeView",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import MobileDropdown from "../components/App/MobileDropdown.vue";

const selectedComponent = ref<string>("simple-text-form");
const toggleComponent = (val: string) => (selectedComponent.value = val);

</script>


<style lang="scss" scoped>
.container {
  padding: 1rem;
  padding-top: 0;
  min-height: calc(100vh - 180px);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
