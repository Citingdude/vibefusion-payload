import { z } from 'zod'
import { lexicalHeadingNodeSchema } from '~/features/lexical/models/lexicalHeadingNode.model'
import { lexicalLinkNodeSchema } from '~/features/lexical/models/lexicalLinkNode.model'
import { lexicalListNodeSchema } from '~/features/lexical/models/lexicalListNode.model'
import { lexicalParagraphNodeSchema } from '~/features/lexical/models/lexicalParagraphNode.model'
import { lexicalQuoteNodeSchema } from '~/features/lexical/models/lexicalQuoteNode.model'
import { lexicalUploadNodeSchema } from '~/features/lexical/models/lexicalUploadNode.model'

export const lexicalNodeSchema = z.union([
  lexicalParagraphNodeSchema,
  lexicalLinkNodeSchema,
  lexicalListNodeSchema,
  lexicalUploadNodeSchema,
  lexicalHeadingNodeSchema,
  lexicalQuoteNodeSchema,
])

export type LexicalNode = z.infer<typeof lexicalNodeSchema>
