import type { Field } from 'payload'

export const CaseCardField: Field = {
  type: 'relationship',
  relationTo: 'cases',
  name: 'case',
  required: true,
}
