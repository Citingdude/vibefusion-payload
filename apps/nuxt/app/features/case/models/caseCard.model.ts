import { z } from 'zod'

export const CaseCardDtoSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.number().nullable(),
  description: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
})

export const CaseCardSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.number().nullable(),
  description: z.string(),
})

export type CaseCardDto = z.infer<typeof CaseCardDtoSchema>
export type CaseCard = z.infer<typeof CaseCardSchema>
