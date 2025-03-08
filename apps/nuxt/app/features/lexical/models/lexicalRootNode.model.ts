import { z } from 'zod'
import { lexicalHeadingNodeSchema } from '~/features/lexical/models/lexicalHeadingNode.model'
import { lexicalLinkNodeSchema } from '~/features/lexical/models/lexicalLinkNode.model'
import { lexicalListNodeSchema } from '~/features/lexical/models/lexicalListNode.model'
import { lexicalParagraphNodeSchema } from '~/features/lexical/models/lexicalParagraphNode.model'
import { lexicalUploadNodeSchema } from '~/features/lexical/models/lexicalUploadNode.model'

export const lexicalNodeSchema = z.union([
  lexicalParagraphNodeSchema,
  lexicalLinkNodeSchema,
  lexicalListNodeSchema,
  lexicalUploadNodeSchema,
  lexicalHeadingNodeSchema,
])

export const lexicalRootNodeSchema = z.object({
  type: z.string(),
  children: lexicalNodeSchema.array(),
})

export type LexicalRootNode = z.infer<typeof lexicalRootNodeSchema>
