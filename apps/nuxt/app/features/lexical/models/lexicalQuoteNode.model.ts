import { z } from 'zod'
import { lexicalTextNodeSchema } from '~/features/lexical/models/lexicalTextNode.model'

export const lexicalQuoteNodeSchema = z.object({
  type: z.literal('quote'),
  children: lexicalTextNodeSchema.array(),
})

export type LexicalQuoteNode = z.infer<typeof lexicalQuoteNodeSchema>
