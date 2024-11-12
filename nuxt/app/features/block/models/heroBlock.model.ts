import { z } from 'zod'
import { imageDtoSchema, imageSchema } from '~/features/image/image.model'
import { buttonBlockDtoSchema, buttonBlockSchema } from './buttonBlock.model'

export const heroBlockDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string().nullable(),
  image: imageDtoSchema,
  blockName: z.string().nullable(),
  buttons: buttonBlockDtoSchema.array(),
  blockType: z.literal('hero'),
})

export const heroBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string().nullable(),
  image: imageSchema,
  blockName: z.string().nullable(),
  buttons: buttonBlockSchema.array(),
  blockType: z.literal('hero'),
})

export type HeroBlockDto = z.infer<typeof heroBlockDtoSchema>
export type HeroBlock = z.infer<typeof heroBlockSchema>
