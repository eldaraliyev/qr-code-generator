<template>
  <button class="toggle" @click="toggleLayout">
    <img v-if="!isDark" src="../../assets/images/cs-light.svg" alt="logo">
    <img v-else src="../../assets/images/cs-dark.svg" alt="logo">
  </button>
</template>

<script setup lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";

defineComponent({name: 'BaseModeToggle'})
const store = useStore();

const isDark = computed(() => store.getters.IS_DARK_MODE_ENABLED);
const toggleLayout = () => store.dispatch("TOGGLE_LAYOUT_THEME");
const initLayout = () => store.dispatch("INIT_LAYOUT_THEME");
initLayout();

</script>


<style lang="scss" scoped>
@import "../../assets/scss/global";

.toggle {
  all: unset;
  cursor: pointer;
  transition: $transition;

}
</style>
