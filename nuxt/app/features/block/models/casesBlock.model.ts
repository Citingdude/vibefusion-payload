import { z } from 'zod'
import { caseCardSchema } from '~/features/case/models/caseCard.model'

export const casesBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  cases: caseCardSchema.array(),
})

export type CasesBlock = z.infer<typeof casesBlockSchema>
