import { z } from 'zod'
import { blockDtoSchema } from '../block/models/block.model'

export const pageDtoSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),

  content: blockDtoSchema.array(),

  meta: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().nullable(),
  }),

  updatedAt: z.string(),
  createdAt: z.string(),
})

export type PageDto = z.infer<typeof pageDtoSchema>
