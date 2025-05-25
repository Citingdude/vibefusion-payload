import { z } from 'zod'

export const lexicalTextNodeSchema = z.object({
  type: z.literal('text'),
  text: z.string().optional(),
  format: z.number(),
})

export type LexicalTextNode = z.infer<typeof lexicalTextNodeSchema>
