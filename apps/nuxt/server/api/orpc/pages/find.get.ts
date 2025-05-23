import { z } from 'zod'
import { useOrpc } from '~/composables/useOrpc'

const PageQuerySchema = z.object({
  path: z.string(),
})

export default defineEventHandler(async (event) => {
  const result = await getValidatedQuery(event, PageQuerySchema.safeParse)

  if (!result.success) {
    throw result.error.issues
  }

  const orpc = useOrpc()

  const pages = await orpc.page.find({
    url: result.data.path,
  })

  return pages
})
