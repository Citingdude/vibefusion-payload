import type { GroupField } from 'payload'
import { BoldFeature, FixedToolbarFeature, HTMLConverterFeature, InlineToolbarFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

interface HighlightTextFieldOptions {
  name?: string
  required?: boolean
}

export function highlightTextField(options?: HighlightTextFieldOptions): GroupField {
  return {
    type: 'group',
    name: options?.name || 'highlightTitle',
    fields: [
      {
        type: 'richText',
        name: 'title',
        required: options?.required,
        admin: {

        },
        editor: lexicalEditor({
          admin: {
            hideInsertParagraphAtEnd: true,
          },
          features: () => [
            InlineToolbarFeature(),
            BoldFeature(),
            FixedToolbarFeature(),
            HTMLConverterFeature(),
          ],
        }),
      },
      lexicalHTML('title', {
        name: 'html',
      }),
    ],
  }
}
