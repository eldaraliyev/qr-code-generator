<template>
  <div class="Dropdown" @click="openDropdown" >
    <span class="Dropdown-Title">{{ selectedTab || "Select Type" }}</span>
    <svg class="Dropdown-Arrow" :class="{'Rotated': isDropdownOpened}" width="13" height="9" viewBox="0 0 13 9" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.63597 5.56099L11.586 0.610992L13 2.02499L6.63597 8.38899L0.271973 2.02499L1.68597 0.610992L6.63597 5.56099Z"/>
    </svg>
    <transition>
      <div v-if="isDropdownOpened" class="Dropdown-Menu">
        <div v-for="variant in dropdownVariants" :key="variant.id">
          <div class="Dropdown-Menu-Variant" @click="selectTabVariant(variant.id)">{{ variant.label }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "MobileDropdown"
}
</script>

<script setup lang="ts">
import {ref, defineEmits} from "vue";
import {Tabs as dropdownVariants} from "../../constants/index"

const emit = defineEmits(['selectMode'])

const isDropdownOpened = ref<boolean>(false)
const selectedTab = ref<string>('')

const openDropdown = () => {
  isDropdownOpened.value = !isDropdownOpened.value
}
const selectTabVariant = (variantId: number) => {
  const target = dropdownVariants.find(item => item.id === variantId)
  if (target) {
    selectedTab.value = target.label
    emit('selectMode', target.value)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.Dropdown {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #4F1CA3;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &-Title {
    font-size: 16px;
    font-weight: 700;
    color: #4F1CA3;
  }

  &-Arrow {
    position: absolute;
    top: calc(50% - 4px);
    right: 16px;
    transition: 500ms;
    fill: #4F1CA3;
    &.Rotated {
      transform: rotate(180deg);
    }
  }

  &-Menu {
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    top: calc(100% + 8px);
    border-radius: 8px;
    padding: 4px 0;
    &-Variant {
      padding: 12px;
      position: relative;
      font-weight: 700;
      cursor: pointer;
      color: #4F1CA3;
    }
  }
}
html[data-theme="dark"] {
  .Dropdown {
    background-color: $neutral-900;
    border-color: $neutral-600;
    &-Title {
      color: $neutral-300;
    }
    &-Arrow {
      fill: $neutral-300
    }
    &-Menu {
      background-color: $neutral-900;
      &-Variant {
        color: $neutral-300;
      }
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>