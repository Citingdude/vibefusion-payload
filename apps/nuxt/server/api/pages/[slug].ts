import type { CollectionDto } from '~/features/collection/models/collection.model'
import type { PageDto } from '~/features/page/models/page.model'
import { getPayloadFetch } from '~~/server/utils/payload/getPayloadFetch'
import { getPayloadQuery } from '~~/server/utils/payload/getPayloadQuery'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  const fetch = getPayloadFetch()
  const query = getPayloadQuery({
    slug: {
      equals: slug,
    },
  })

  const data = await fetch<CollectionDto<PageDto>>(`/pages${query}`)

  return data.docs[0]
})
