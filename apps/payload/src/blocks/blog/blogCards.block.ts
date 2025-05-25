import type { Block } from 'payload'
import { BlogCardField } from '@payload/fields/blog/blogCard.field'

export const BlogCardsBlock: Block = {
  slug: 'blogCardsBlock',
  interfaceName: 'BlogCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'array',
      name: 'blogCards',
      fields: [
        BlogCardField,
      ],
    },
  ],
}
