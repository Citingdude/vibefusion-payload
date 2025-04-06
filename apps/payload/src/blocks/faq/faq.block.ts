import type { Block } from 'payload'
import { FaqItemField } from '@payload/fields/faq/faq.field'

export const FaqBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FaqBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'array',
      name: 'faqItems',
      fields: [
        FaqItemField(),
      ],
      maxRows: 10,
    },
  ],
}
