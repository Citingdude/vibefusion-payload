import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ButtonField } from '../../fields/button/button.field'

export const CtaBlock: Block = {
  slug: 'ctaBlock',
  interfaceName: 'CtaBlock',
  fields: [
    {
      type: 'text',
      required: true,
      name: 'title',
    },
    {
      type: 'richText',
      required: true,
      name: 'body',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
        ],
      }),
    },
    ButtonField,
  ],
}
