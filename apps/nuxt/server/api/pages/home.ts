import type { CollectionDto } from '~/features/collection/models/collection.model'
import type { PageDto } from '~/features/page/types/page.type'
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
