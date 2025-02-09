import { z } from 'zod'
import { CaseCardArrayItemDtoSchema, CaseCardArrayItemSchema } from '~/features/case/models/caseCardArrayItem.model'

export const CaseCardsBlockDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  blockName: z.string().nullable(),
  caseCards: CaseCardArrayItemDtoSchema.array(),
  blockType: z.literal('caseCardsBlock'),
})

export const CaseCardsBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  caseCards: CaseCardArrayItemSchema.array(),
  blockType: z.literal('caseCardsBlock'),
})

export type CaseCardsBlockDto = z.infer<typeof CaseCardsBlockDtoSchema>
export type CaseCardsBlock = z.infer<typeof CaseCardsBlockSchema>
