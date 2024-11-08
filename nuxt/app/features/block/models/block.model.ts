import { z } from 'zod'
import { heroBlockDtoSchema } from './heroBlock.model'

export const blockDtoSchema = z.discriminatedUnion('blockType', [
  heroBlockDtoSchema,
])

export type BlockDto = z.infer<typeof blockDtoSchema>
