import type { Page } from '@payload-types'
import type { PayloadCollection } from '~~/server/types/payload/payloadCollection.type'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const fetch = getPayloadFetch()
  const query = getPayloadQuery({
    slug: {
      equals: slug,
    },
  })

  return fetch<PayloadCollection<Page>>(`/pages${query}`)
})
