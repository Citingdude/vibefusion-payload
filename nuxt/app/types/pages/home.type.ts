import { z } from 'zod'
import { ButtonSchema } from '../components/button.type'
import { PageSeoSchema } from '../components/pageSeo.type'
import { ServiceSchema } from '../service/service.type'

export const PageHomeSchema = z.object({
  data: z.object({
    id: z.number(),
    attributes: z.object({
      title: z.string(),
      slug: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),

      hero: z.object({
        id: z.number(),
        title: z.string(),
        secondary_button: ButtonSchema,
        primary_button: ButtonSchema,
      }),

      services: z.array(ServiceSchema),

      cta: z.object({
        id: z.number(),
        title: z.string(),
        body: z.string(),
        button: ButtonSchema,
      }),

      seo: PageSeoSchema.nullable(),
    }),
  }),
})

export type PageHome = z.infer<typeof PageHomeSchema>
