<template>
  <div class="home">
    <base-tabs @toggle-tab="toggleComponent"></base-tabs>
    <Transition mode="out-in">
      <div class="card">
        <component :is="selectedComponent"/>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const selectedComponent = ref("simple-generator");
    const toggleComponent = (val: string) => (selectedComponent.value = val);
    return {
      toggleComponent,
      selectedComponent,
    };
  },
});
</script>
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
