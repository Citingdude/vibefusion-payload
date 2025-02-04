import { z } from 'zod'
import { imageSchema } from '~/features/image/image.model'

export const caseCardSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  slug: z.string(),
  image: imageSchema,
})

export type CaseCard = z.infer<typeof caseCardSchema>
