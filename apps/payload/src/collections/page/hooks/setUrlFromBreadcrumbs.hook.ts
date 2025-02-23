import type { Page } from '@vibefusion/types'
import type { CollectionBeforeChangeHook } from 'payload'

export const setUrlFromBreadcrumbsHook: CollectionBeforeChangeHook<Page> = (ctx) => {
  const url = ctx.data.breadcrumbs?.at(-1)?.url

  if (!url) {
    return
  }

  ctx.data.url = url
}
