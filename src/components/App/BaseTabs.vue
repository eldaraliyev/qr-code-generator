<template>
  <div class="tabs">
    <div class="tabs__radio-group">
      <div v-for="option in modes" :key="option.value">
        <label
            :for="option.value"
            class="tabs__radio-button"
            :class="selectedTab === option.value ? 'selected' : ''"
        >
          <input
              type="radio"
              class="tabs__radio-input"
              :id="option.value"
              :value="option.value"
              v-model="selectedTab"
              @input="toggleTab"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, defineEmits, defineComponent, watch} from "vue";
import {Tabs as modes} from "../../constants/index"
import {useStore} from "vuex";

defineComponent({name: 'BaseTabs'})

const emit = defineEmits(["selectMode"])
const {commit} = useStore()
const selectedTab = ref<string>("");

watch(selectedTab, (value, oldValue) => {
  if (oldValue && (value !== oldValue)) {
    commit('RESET_QR_CODE')
  }
})
const toggleTab = (val: any) => {
  emit("selectMode", val.target.value);
};

</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

.tabs {
  @include flex(center, center, row, 0.5rem);
  width: 100%;
  padding: 1.5rem 0;

  &__radio {
    &-group {
      @include flex(center, space-around, row, 1rem);
      flex-wrap: wrap;
    }

    &-button {
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      padding: 1rem;
      transition: $transition;

      &:hover {
        color: lighten($color: $font-tab, $amount: 5);
      }
    }

    &-input {
      display: none;
    }
  }
}

.selected {
  color: $font-tab;
}

.custom__tab {
  position: relative;

  &-checkbox {
    position: absolute;
    display: none;
  }

  &-label {
    transition: $transition;
    width: 100%;
  }

  &-checkbox:checked ~ .tabs {
    background-color: darken($color: #fff, $amount: 50);
    color: #fff;
  }
}

@include media-query(sm) {
  .tabs {
    display: none;
  }
};
</style>
