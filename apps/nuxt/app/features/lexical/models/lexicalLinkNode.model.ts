import { z } from 'zod'
import { lexicalTextNodeSchema } from '~/features/lexical/models/lexicalTextNode.model'

export const lexicalCustomLink = z.object({
  url: z.string(),
  newTab: z.boolean(),
  linkType: z.literal('custom'),
})

export const lexicalInternalLink = z.object({
  doc: z.object({
    value: z.object({
      id: z.number(),
      title: z.string(),
      slug: z.string(),
    }),
    relationTo: z.enum(['cases', 'pages']),
  }),
  newTab: z.boolean(),
  linkType: z.literal('internal'),
})

export const lexicalLinkNodeSchema = z.object({
  id: z.string(),
  type: z.literal('link'),
  children: lexicalTextNodeSchema.array(),
  fields: z.union([lexicalCustomLink, lexicalInternalLink]),
})

export type LexicalLinkNode = z.infer<typeof lexicalLinkNodeSchema>
