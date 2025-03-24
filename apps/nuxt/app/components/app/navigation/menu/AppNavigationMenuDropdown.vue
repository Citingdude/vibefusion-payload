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
      gap-0.5 rounded-sm px-3 py-2
      text-sm font-medium leading-none outline-none
      focus:shadow-[0_0_0_2px] focus:shadow-green7
      hover:bg-green3"
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
          absolute top-full left-0 w-full sm:w-max bg-light-alt rounded-b-lg"
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
