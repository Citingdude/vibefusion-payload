import { z } from 'zod'

const PageSeoSocialSchema = z.object({
  id: z.number(),
  socialNetwork: z.enum(['Facebook', 'Twitter']),
  title: z.string(),
  description: z.string(),
})

export const PageSeoSchema = z.object({
  id: z.number(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  keywords: z.string(),
  metaSocial: z.array(PageSeoSocialSchema),
  canonicalURL: z.string().nullable(),
})

export type PageSeo = z.infer<typeof PageSeoSchema>
