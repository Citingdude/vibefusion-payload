<script setup lang="ts">
interface Props {
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}
const props = defineProps<Props>()

const fontWeightClass = computed(() => {
  switch (props.fontWeight) {
    case '100':
      return 'font-thin'
    case '200':
      return 'font-extralight'
    case '300':
      return 'font-light'
    case '400':
      return 'font-normal'
    case '500':
      return 'font-medium'
    case '600':
      return 'font-semibold'
    case '700':
      return 'font-bold'
    case '800':
      return 'font-extrabold'
    case '900':
      return 'font-black'
    default:
      return 'font-bold'
  }
})
</script>

<template>
  <h2
    class="font-display text-3xl sm:text-4xl"
    :class="[fontWeightClass]"
  >
    <slot />
  </h2>
</template>

<style scoped>

</style>
