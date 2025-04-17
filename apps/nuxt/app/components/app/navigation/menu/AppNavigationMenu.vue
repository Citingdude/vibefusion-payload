<script setup lang="ts">
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from 'reka-ui'

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

const route = useRoute()

function getActiveState(to: string): boolean {
  return Boolean(route.path.startsWith(to))
}
</script>

<template>
  <NavigationMenuRoot
    class="relative z-10 flex w-full justify-center"
    :disable-hover-trigger="true"
    :disable-pointer-leave-close="true"
  >
    <NavigationMenuList class="flex list-none gap-6">
      <template v-for="(item, index) in props.items" :key="index">
        <AppNavigationMenuDropdown
          v-if="item.type === 'dropdown'"
          :label="item.label"
          :items="item.subItems"
        />

        <NavigationMenuItem v-else>
          <NavigationMenuLink
            class="transition block select-none font-medium leading-none no-underline font-display text-lg relative group"
            as-child
          >
            <NuxtLink :to="item.to">
              <span>
                {{ item.label }}

                <span
                  class="group-[router-link-exact-active]:bg-accent-dark size-2 bg-accent rounded-full opacity-0
                    transition ease-in-out duration-300
                    absolute right-1/2 bottom-0
                    group-hover:opacity-100 group-hover:translate-y-3 translate-y-2"
                  :class="{ 'opacity-100 translate-y-3': getActiveState(item.to) }"
                />
              </span>
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </template>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
