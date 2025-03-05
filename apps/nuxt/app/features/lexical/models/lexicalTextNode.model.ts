import { z } from 'zod'

export const lexicalTextNodeSchema = z.object({
  type: z.literal('text'),
  text: z.string(),
})

export type LexicalTextNode = z.infer<typeof lexicalTextNodeSchema>
