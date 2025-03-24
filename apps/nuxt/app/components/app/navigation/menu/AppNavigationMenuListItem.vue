<script setup lang="ts">
import { NavigationMenuLink } from 'reka-ui'

const props = defineProps<{
  label: string
  to: string
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <NuxtLink
        :to="props.to"
        class="
        focus:shadow-[0_0_0_2px] focus:shadow-green7
        hover:bg-mauve3
        block select-none rounded-md p-3 text-sm leading-none no-underline outline-none
        transition-colors"
      >
        <span class="text-green12 mb-[5px] font-medium leading-[1.2]">
          {{ props.label }}
        </span>
      </NuxtLink>
    </NavigationMenuLink>
  </li>
</template>
