import { z } from 'zod'
import { CaseCardsBlockDtoSchema, CaseCardsBlockSchema } from '~/features/block/models/caseCardsBlock.model'
import { HeroBlockDtoSchema, HeroBlockSchema } from '~/features/block/models/heroBlock.model'
import { ServiceCardsBlockSchema, ServiceCardsDtoBlockSchema } from '~/features/block/models/serviceCardsBlock.model'

export const BlockDtoSchema = z.discriminatedUnion('blockType', [
  HeroBlockDtoSchema,
  ServiceCardsDtoBlockSchema,
  CaseCardsBlockDtoSchema,
])

export const BlockSchema = z.discriminatedUnion('blockType', [
  HeroBlockSchema,
  ServiceCardsBlockSchema,
  CaseCardsBlockSchema,
])

export type BlockDto = z.infer<typeof BlockDtoSchema>
export type Block = z.infer<typeof BlockSchema>
