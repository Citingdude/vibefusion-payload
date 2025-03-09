import type { RadioField } from 'payload'

export function linkTypeField(): RadioField {
  return {
    name: 'type',
    type: 'radio',
    enumName: 'link_type',
    admin: {
      layout: 'horizontal',
      width: '50%',
    },
    defaultValue: 'reference',
    options: [
      {
        label: 'Internal link',
        value: 'reference',
      },
      {
        label: 'Custom URL',
        value: 'custom',
      },
    ],
  }
}
