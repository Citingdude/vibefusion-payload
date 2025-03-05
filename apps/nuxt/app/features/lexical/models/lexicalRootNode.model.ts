import { z } from 'zod'
import { lexicalParagraphNodeSchema } from '~/features/lexical/models/lexicalParagraphNode.model'

export const lexicalRootNodeSchema = z.object({
  type: z.string(),
  children: lexicalParagraphNodeSchema.array(),
})
