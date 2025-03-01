import type { Block } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
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
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({

          }),
        ],
      }),
    },
    lexicalHTML('body', { name: 'bodyHtml' }),
    ButtonField,
  ],
}
