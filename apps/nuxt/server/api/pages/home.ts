import type { Page } from '@payload-types'
import type { PayloadCollection } from '~~/server/types/payload/payloadCollection.type'

export default defineEventHandler(async () => {
  const fetch = getPayloadFetch()
  const query = getPayloadQuery({
    slug: {
      equals: 'home',
    },
  })

  const response = await fetch<PayloadCollection<Page>>(`/pages${query}`)

  return response.docs[0]
})
