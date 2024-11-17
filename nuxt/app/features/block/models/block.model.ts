import { z } from 'zod'
import { heroBlockDtoSchema } from './heroBlock.model'
import { servicesBlockDtoSchema } from './servicesBlock.model'

export const blockDtoSchema = z.discriminatedUnion('blockType', [
  heroBlockDtoSchema,
  servicesBlockDtoSchema,
])

export type BlockDto = z.infer<typeof blockDtoSchema>
