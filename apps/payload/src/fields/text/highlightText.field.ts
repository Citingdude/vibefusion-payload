import type { GroupField } from 'payload'
import { BoldFeature, FixedToolbarFeature, HeadingFeature, HTMLConverterFeature, InlineToolbarFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

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
        editor: lexicalEditor({
          features: () => [
            InlineToolbarFeature(),
            BoldFeature(),
            FixedToolbarFeature(),
            HTMLConverterFeature(),
            HeadingFeature({
              enabledHeadingSizes: ['h1'],
            }),
          ],
        }),
      },
      lexicalHTML('title', {
        name: 'html',
      }),
    ],
  }
}
