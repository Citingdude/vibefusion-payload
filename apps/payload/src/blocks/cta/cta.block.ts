import type { Block } from 'payload'
import { linkField } from '@payload/fields/link/link.field'
import { RichTextField } from '@payload/fields/richtext/richText.field'

export const CtaBlock: Block = {
  slug: 'ctaBlock',
  interfaceName: 'CtaBlock',
  fields: [
    {
      type: 'text',
      required: true,
      name: 'title',
    },
    RichTextField({
      name: 'content',
    }),
    linkField(),
  ],
}
