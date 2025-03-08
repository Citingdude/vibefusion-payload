import type { GroupField } from 'payload'
import { lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'

interface RichTextFieldOptions {
  name: string
}

export function RichTextField({
  name,
}: RichTextFieldOptions): GroupField {
  return {
    interfaceName: 'RichTextField',
    type: 'group',
    fields: [
      {
        type: 'richText',
        name: 'richtext',
        label: 'Body',
        editor: lexicalEditor({
          features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            LinkFeature({
              enabledCollections: ['pages', 'cases'],
            }),
          ],
        }),
      },
    ],
    name,
  }
}
