<script setup lang="ts">
import type { Case, LinkField, Page } from '@repo/payload'
import type { ButtonProps } from '~/components/app/button/AppButton.vue'

const props = defineProps<{
  linkField: LinkField
  size?: ButtonProps['size']
  color?: ButtonProps['color']
}>()

const link = computed<string | undefined>(() => {
  if (props.linkField.type === 'custom') {
    return props.linkField.url || undefined
  }

  if (!props.linkField.reference) {
    return undefined
  }

  switch (props.linkField.reference.relationTo) {
    case 'pages':
      return getPageLink(props.linkField.reference.value)

    case 'cases':
      return getCaseLink(props.linkField.reference.value)

    default:
      return undefined
  }
})

function getPageLink(page: number | Page): string | undefined {
  if (typeof page === 'number') {
    return page.toString()
  }

  return page.url || undefined
}

function getCaseLink(caseItem: number | Case): string {
  if (typeof caseItem === 'number') {
    return caseItem.toString()
  }

  return `/cases/${caseItem.slug}`
}
</script>

<template>
  <AppButton
    :to="link"
    :size="props.size"
    :color="props.color"
  >
    {{ props.linkField.label }}
  </AppButton>
</template>
