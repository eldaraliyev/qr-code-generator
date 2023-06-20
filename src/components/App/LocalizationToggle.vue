<template>
  <div class="Localization-Tab" v-if="false">
    <img :src="selectedLocale.flagImage">
    <span class="Localization-Current">{{ selectedLocale.localeCode }}</span>
    <transition>
      <div class="Localization-Menu">
        <div class="Localization-Menu-Variant" v-for="locale in locales" :key="locale.id" @click="selectLocale(locale)">
          <img :src="locale.flagImage">
          <span>{{ locale.localeCode }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup lang="ts">
import {defineComponent, reactive, ref} from "vue";
import type Locale from "@/types/locale";
defineComponent({name: 'LocalizationToggle'})
const isVisible = ref<Boolean>(false)

const selectedLocale = ref<Locale>( {id: 'az', flagImage: 'src/assets/images/flags/az.svg', localeCode: 'aze'},)
const locales = reactive<Locale[]>([
  {id: 'az', flagImage: 'src/assets/images/flags/az.svg', localeCode: 'aze'},
  {id: 'ru', flagImage: 'src/assets/images/flags/ru.svg', localeCode: 'rus'},
  {id: 'en', flagImage: 'src/assets/images/flags/en.svg', localeCode: 'eng'},
  {id: 'uk', flagImage: 'src/assets/images/flags/uk.svg', localeCode: 'ukr'}
])

const selectLocale = (locale) => selectedLocale.value = locale
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
@include component-transition;

.Localization {
  &-Tab {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 40px;
    background-color: white;
    border: 2px solid #4F1CA3;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &-Current {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #4F1CA3;
  }

  &-Menu {
    position: absolute;
    top: calc(100% + 16px);
    width: 100px;
    background-color: white;
    border: 2px solid #4F1CA3;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &-Variant {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 12px;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #4F1CA3;
      cursor: pointer;
      transition: all 100ms ease;
      &:hover {
        background-color: #4F1CA310;
      }
    }
  }
}
</style>