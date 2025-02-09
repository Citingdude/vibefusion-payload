import { z } from 'zod'
import { ButtonArrayItemDtoSchema, ButtonArrayItemSchema } from '~/features/button/models/buttonArrayItem.model'
import { ImageDtoSchema, ImageSchema } from '~/features/image/models/image.model'

export const HeroBlockDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string().nullable(),
  image: ImageDtoSchema,
  blockName: z.string().nullable(),
  buttons: ButtonArrayItemDtoSchema.array(),
  blockType: z.literal('hero'),
})

export const HeroBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string().nullable(),
  image: ImageSchema,
  buttons: ButtonArrayItemSchema.array(),
  blockType: z.literal('hero'),
})

export type HeroBlockDto = z.infer<typeof HeroBlockDtoSchema>
export type HeroBlock = z.infer<typeof HeroBlockSchema>
