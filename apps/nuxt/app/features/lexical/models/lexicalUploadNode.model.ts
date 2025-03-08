import { z } from 'zod'

export const lexicalUploadNodeSchema = z.object({
  id: z.string(),
  type: z.literal('upload'),
  value: z.object({
    id: z.number(),
    alt: z.string(),
    url: z.string(),
    width: z.number(),
    height: z.number(),
    focalX: z.number(),
    focalY: z.number(),
  }),
  relationTo: z.literal('media'),
})

export type LexicalUploadNode = z.infer<typeof lexicalUploadNodeSchema>
