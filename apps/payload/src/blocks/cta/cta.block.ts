import type { Block } from 'payload'
import { ButtonField } from '@payload/fields/button/button.field'
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
    ButtonField,
  ],
}
