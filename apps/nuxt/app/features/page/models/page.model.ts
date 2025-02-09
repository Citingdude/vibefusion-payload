import { z } from 'zod'
import { BlockDtoSchema, BlockSchema } from '~/features/block/models/block.model'
import { ImageDtoSchema, ImageSchema } from '~/features/image/models/image.model'

export const PageDtoSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  content: BlockDtoSchema.array(),
  meta: z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: ImageDtoSchema.nullable(),
  }),
  updatedAt: z.string(),
  createdAt: z.string(),
})

export const PageSchema = z.object({
  slug: z.string(),
  title: z.string(),
  content: BlockSchema.array(),
  meta: z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: ImageSchema.nullable(),
  }),
})

export type PageDto = z.infer<typeof PageDtoSchema>
export type Page = z.infer<typeof PageSchema>
