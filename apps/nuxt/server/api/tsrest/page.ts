import { z } from 'zod'
import { useTsRest } from '~/composables/useTsRest'

export const querySchema = z.object({
  path: z.string(),
})

export default defineEventHandler(async (event) => {
  const tsRest = useTsRest()

  const query = await getValidatedQuery(event, querySchema.parse)

  const response = await tsRest.getPage({
    query: {
      path: query.path,
    },
  })

  return response
})
