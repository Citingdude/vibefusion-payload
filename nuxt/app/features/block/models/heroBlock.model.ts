import { z } from 'zod'
import { imageDtoSchema } from '~/features/components/models/image.model'
import { buttonBlockDtoSchema } from './buttonBlock.model'

export const heroBlockDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string().nullable(),
  image: imageDtoSchema,
  blockName: z.string().nullable(),
  buttons: buttonBlockDtoSchema.array(),
  blockType: z.literal('hero'),
})

export type HeroBlockDto = z.infer<typeof heroBlockDtoSchema>
