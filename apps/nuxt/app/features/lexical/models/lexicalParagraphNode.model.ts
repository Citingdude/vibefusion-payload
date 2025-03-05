import { z } from 'zod'
import { lexicalLinkNodeSchema } from '~/features/lexical/models/lexicalLinkNode.model'
import { lexicalTextNodeSchema } from '~/features/lexical/models/lexicalTextNode.model'

export const lexicalParagraphNodeSchema = z.object({
  type: z.literal('paragraph'),
  children: z.union([lexicalLinkNodeSchema, lexicalTextNodeSchema]).array(),
})

export type LexicalParagraphNode = z.infer<typeof lexicalParagraphNodeSchema>
