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
        block select-none rounded-md p-3 leading-none
        transition hover:bg-light-alt active:scale-95"
      >
        <span class="font-medium leading-[1.2]">
          {{ props.label }}
        </span>
      </NuxtLink>
    </NavigationMenuLink>
  </li>
</template>
