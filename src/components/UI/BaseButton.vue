<template>
  <button v-bind="$attrs" class="btn" @click="handleClick">
    <span class="Download-Icon" v-if="downloadIcon">
    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M1.0098e-06 13.5C-0.000614785 12.3955 0.280422 11.309 0.816552 10.3433C1.35268 9.37761 2.1262 8.56457 3.064 7.98101C3.31151 6.0511 4.2538 4.27751 5.71452 2.99217C7.17524 1.70682 9.05428 0.997803 11 0.997803C12.9457 0.997803 14.8248 1.70682 16.2855 2.99217C17.7462 4.27751 18.6885 6.0511 18.936 7.98101C20.0992 8.7047 21.0041 9.77741 21.5213 11.046C22.0385 12.3146 22.1417 13.7141 21.8161 15.0449C21.4906 16.3756 20.7528 17.5694 19.7083 18.4559C18.6638 19.3423 17.366 19.8761 16 19.981L6 20C2.644 19.726 1.0098e-06 16.922 1.0098e-06 13.5ZM15.848 17.987C16.7938 17.9143 17.6925 17.5445 18.4156 16.9305C19.1387 16.3166 19.6493 15.4898 19.8745 14.5682C20.0996 13.6467 20.0278 12.6776 19.6692 11.7994C19.3107 10.9211 18.6837 10.1787 17.878 9.67801L17.071 9.17501L16.951 8.23301C16.7641 6.7867 16.0569 5.45795 14.9616 4.4951C13.8663 3.53225 12.4578 3.0012 10.9995 3.0012C9.54116 3.0012 8.13272 3.53225 7.03742 4.4951C5.94213 5.45795 5.23493 6.7867 5.048 8.23301L4.928 9.17501L4.123 9.67801C3.3173 10.1786 2.69038 10.921 2.3318 11.7992C1.97321 12.6773 1.90129 13.6463 2.12631 14.5678C2.35133 15.4893 2.86177 16.3161 3.58475 16.9302C4.30773 17.5442 5.20625 17.9141 6.152 17.987L6.325 18H15.675L15.848 17.987ZM12 11H15L11 16L7 11H10V7.00001H12V11Z"
          fill="white"/>
    </svg>
    </span>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, defineComponent} from "vue";

defineComponent({name: 'BaseButton'})
defineProps({
  title: String,
  downloadIcon: Boolean,
});
const emit = defineEmits(["btnClick"]);

function handleClick(e: Event) {
  emit("btnClick");
}
</script>


<style lang="scss" scoped>
@import "../../assets/scss/variables";

.btn {
  all: unset;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  height: 18px;
  border-radius: 8px;
  padding: 12px 40px;
  transition: $transition;
  box-shadow: $box-shadow;
  color: $font-button;

  &-primary {
    html[data-theme="light"] & {
      background-color: $indigo-600;

      &:hover {
        background-color: darken($indigo-600, 5);
      }
    }

    html[data-theme="dark"] & {
      background-color: #2e1065;

      &:hover {
        background-color: darken(#2e1065, 5);
      }
    }
  }

  &[type='reset'] {
    background-color: #e35d60;

    &:hover {
      background-color: darken(#e35d60, 5);
    }
  }


  &[type='reset'] {
    background-color: #b02f32;

    &:hover {
      background-color: darken(#b02f32, 5);
    }
  }


  &.DownloadBtn {
    background-color: #41B883;
  }

}
</style>
