import type { Field } from 'payload'
import { ButtonField } from '@/fields/button/button.field'

export const ButtonArrayField: Field = {
  type: 'array',
  name: 'buttons',
  fields: [ButtonField],
  maxRows: 2,
}
