import { z } from 'zod'
import { CaseCardDtoSchema } from '~/features/case/models/caseCard.model'

export const CaseCardArrayItemDtoSchema = z.object({
  id: z.string(),
  case: CaseCardDtoSchema,
})

export const CaseCardArrayItemSchema = z.object({
  id: z.string(),
  case: CaseCardDtoSchema,
})
