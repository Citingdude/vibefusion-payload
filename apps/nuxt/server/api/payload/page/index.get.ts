import { z } from 'zod'
import getPayloadUtil from '~~/server/utils/payload/getPayload.util'

const PageQuerySchema = z.object({
  path: z.string(),
})

export default defineEventHandler(async (event) => {
  const result = await getValidatedQuery(event, PageQuerySchema.safeParse)
  const payload = await getPayloadUtil()

  if (!result.success) {
    throw result.error.issues
  }

  const path = result.data.path

  const data = await payload.find({
    collection: 'pages',
    where: {
      url: {
        equals: path,
      },
    },
    depth: 2,
  })

  const page = data.docs[0]

  if (!page) {
    return null
  }

  return page
})
