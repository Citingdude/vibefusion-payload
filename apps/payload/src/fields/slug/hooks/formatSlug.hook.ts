import type { FieldHook } from 'payload'
import { formatSlug } from '@/utils/slug/formatSlug.util'

export function formatSlugHook(fallback: string): FieldHook {
  return ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallbackData = data?.[fallback] || data?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }
}
