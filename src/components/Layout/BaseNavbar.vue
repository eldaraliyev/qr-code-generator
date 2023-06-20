<template>
  <base-tabs @select-mode="toggleComponent"></base-tabs>
  <mobile-dropdown @select-mode="toggleComponent"></mobile-dropdown>
</template>

<script setup lang="ts">
import {ref, defineEmits, defineComponent} from "vue";

defineComponent({name: 'BaseNavbar'})
const emit = defineEmits(['selectMode'])

const selectedComponent = ref<string>("simple-text-form");
const toggleComponent = (val: string) => {
  selectedComponent.value = val
  emit('selectMode', val)
};

</script>
