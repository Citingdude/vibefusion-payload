import { RichTextField } from '@payload/fields/richtext/richText.field'
import type { GroupField } from 'payload'

export function FaqItemField(): GroupField {
  return {
    type: 'group',
    name: 'faqItem',
    interfaceName: 'FaqItem',
    fields: [
      {
        name: 'question',
        type: 'text',
        required: true,
      },
      RichTextField({
        name: 'answer'
      }),
    ],
  }
}
