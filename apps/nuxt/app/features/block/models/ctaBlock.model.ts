import { z } from 'zod'
import { buttonSchema } from '~/features/button/button.model'

export const ctaBlockSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  button: buttonSchema,
})

export type CtaBlock = z.infer<typeof ctaBlockSchema>
