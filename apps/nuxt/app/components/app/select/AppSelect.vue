<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'

export interface SelectOption {
  value: string
  label: string
}

const props = defineProps<{
  label: string
  placeholder: string
  options: SelectOption[]
}>()

const model = defineModel<string | undefined>({
  required: true,
})
</script>

<template>
  <SelectRoot v-model="model">
    <SelectTrigger
      class="inline-flex min-w-[160px] items-center justify-between rounded-lg px-4 text-xs leading-none h-9
      gap-1 bg-white text-dark-400 hover:bg-light-alt border shadow-sm focus:shadow-[0_0_0_2px]
      focus:shadow-black data-[placeholder]:text-dark-100 outline-none"
      :aria-label="props.label"
    >
      <SelectValue :placeholder="props.placeholder" />
      <AppIcon
        icon="chevronDown"
        class="size-4 text-accent"
      />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        side="left"
        class="bg-white rounded-lg border shadow-sm
        will-change-[opacity,transform] z-50
        data-[side=top]:animate-slideDownAndFade
        data-[side=right]:animate-slideLeftAndFade
        data-[side=bottom]:animate-slideUpAndFade
        data-[side=left]:animate-slideRightAndFade"
        :side-offset="100"
      >
        <SelectScrollUpButton class="flex items-center justify-center h-6 bg-white text-black cursor-default">
          <AppIcon class="size-3" icon="chevronUp" />
        </SelectScrollUpButton>

        <SelectViewport class="p-1">
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in props.options"
              :key="index"
              class="text-xs leading-none text-black rounded-1 flex items-center h-6 pr-9 pl-6 relative select-none
              data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none
              data-[highlighted]:bg-green9 data-[highlighted]:text-accent"
              :value="option.value"
            >
              <SelectItemIndicator class="absolute left-0 w-6 inline-flex items-center justify-center">
                <AppIcon class="size-3" icon="check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option.label }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton class="flex items-center justify-center h-6 bg-white text-black cursor-default">
          <AppIcon class="size-3" icon="chevronDown" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
