import type { Page } from '@repo/payload'
import type { CollectionDto } from '~/features/collection/models/collection.model'
import { z } from 'zod'
import { getPayloadFetch } from '~~/server/utils/payload/getPayloadFetch'
import { getPayloadQuery } from '~~/server/utils/payload/getPayloadQuery'

const PageQuerySchema = z.object({
  path: z.string(),
})

export default defineEventHandler(async (event) => {
  const result = await getValidatedQuery(event, PageQuerySchema.safeParse)

  if (!result.success) {
    throw result.error.issues
  }

  const path = result.data.path

  const fetch = getPayloadFetch()
  const query = getPayloadQuery({
    url: {
      equals: path,
    },
  })

  const data = await fetch<CollectionDto<Page>>(`/pages${query}`)

  const page = data.docs[0]

  if (!page) {
    return null
  }

  return page
})
