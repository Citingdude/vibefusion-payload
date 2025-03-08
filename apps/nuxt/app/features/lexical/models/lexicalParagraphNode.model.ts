import { z } from 'zod'
import { lexicalLinebreakNodeSchema } from '~/features/lexical/models/lexicalLinebreak.model'
import { lexicalLinkNodeSchema } from '~/features/lexical/models/lexicalLinkNode.model'
import { lexicalTextNodeSchema } from '~/features/lexical/models/lexicalTextNode.model'

export const lexicalParagraphNodeSchema = z.object({
  type: z.literal('paragraph'),
  children: z.union([lexicalLinkNodeSchema, lexicalTextNodeSchema, lexicalLinebreakNodeSchema]).array(),
})

export type LexicalParagraphNode = z.infer<typeof lexicalParagraphNodeSchema>
