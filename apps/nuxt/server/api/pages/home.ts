import type { Page as PageDto } from '@repo/payload'
import type { CollectionDto } from '~/features/collection/models/collection.model'
import { getPayloadFetch } from '~~/server/utils/payload/getPayloadFetch'
import { getPayloadQuery } from '~~/server/utils/payload/getPayloadQuery'

export default defineEventHandler(async () => {
  const fetch = getPayloadFetch()
  const query = getPayloadQuery({
    slug: {
      equals: 'home',
    },
  })

  const data = await fetch<CollectionDto<PageDto>>(`/pages${query}`)

  return data.docs[0]
})
