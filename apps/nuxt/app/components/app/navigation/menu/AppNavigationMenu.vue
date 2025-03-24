<script setup lang="ts">
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from 'reka-ui'
import { ref } from 'vue'

export interface AppNavigationMenuItemLink {
  type: 'link'
  label: string
  to: string
}

export interface AppNavigationMenuItemLinkDropdown {
  type: 'dropdown'
  label: string
  subItems: AppNavigationMenuItemLink[]
}

export type AppNavigationMenuItemProps = AppNavigationMenuItemLink | AppNavigationMenuItemLinkDropdown

const props = defineProps<{
  items: AppNavigationMenuItemProps[]
}>()

const currentTrigger = ref('')
</script>

<template>
  <NavigationMenuRoot
    v-model="currentTrigger"
    class="relative z-10 flex w-full justify-center"
  >
    <NavigationMenuList class="center m-0 flex list-none rounded-lg bg-white p-1 shadow-sm border">
      <template v-for="(item, index) in props.items" :key="index">
        <AppNavigationMenuDropdown
          v-if="item.type === 'dropdown'"
          :label="item.label"
          :items="item.subItems"
        />

        <NavigationMenuItem v-else>
          <NavigationMenuLink
            class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none
            rounded-[4px] px-3 py-2 text-sm font-medium leading-none no-underline outline-none
            focus:shadow-[0_0_0_2px]"
            as-child
          >
            <NuxtLink :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </template>
    </NavigationMenuList>

    <!-- <div class="absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuViewport
        class="
          data-[state=open]:animate-scaleIn
          data-[state=closed]:animate-scaleOut
          relative mt-[10px]
          h-[var(--reka-navigation-menu-viewport-height)]
          w-full origin-[top_center] overflow-hidden rounded-xl bg-white
          transition-[width,_height] duration-300
          sm:w-[var(--reka-navigation-menu-viewport-width)] border shadow-sm"
      />
    </div> -->
  </NavigationMenuRoot>
</template>
