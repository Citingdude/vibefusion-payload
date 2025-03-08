import { z } from 'zod'

export const lexicalTextNodeSchema = z.object({
  type: z.literal('text'),
  text: z.string().optional(),
})

export type LexicalTextNode = z.infer<typeof lexicalTextNodeSchema>
