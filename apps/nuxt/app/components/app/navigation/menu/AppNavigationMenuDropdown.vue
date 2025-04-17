<script setup lang="ts">
import type { AppNavigationMenuItemLink } from '~/components/app/navigation/menu/AppNavigationMenu.vue'

const props = defineProps<{
  label: string
  items: AppNavigationMenuItemLink[]
}>()
</script>

<template>
  <NavigationMenuItem class="relative">
    <NavigationMenuTrigger
      class="group flex select-none items-center justify-between
      font-medium leading-none cursor-pointer font-display text-lg transition"
    >
      {{ props.label }}

      <AppIcon class="size-4" icon="chevronDown" />
    </NavigationMenuTrigger>

    <NavigationMenuContent
      class="
        animate-slideDownAndFade
        data-[motion=from-start]:animate-enterFromLeft
        data-[motion=from-end]:animate-enterFromRight
        data-[motion=to-start]:animate-exitToLeft
        data-[motion=to-end]:animate-exitToRight
        absolute top-full left-0
        w-full sm:w-max bg-white rounded-b-lg shadow-accent-dark/5  shadow-md
        py-2 px-1 mt-1"
    >
      <ul class="flex flex-col w-full list-none">
        <AppNavigationMenuListItem
          v-for="(item, index) in props.items"
          :key="index"
          :to="item.to"
          :label="item.label"
        />
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>
