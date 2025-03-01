import type { Field } from 'payload'
import { ButtonField } from '../../fields/button/button.field'
import { IconField } from '../../fields/icon/icon.field'

export const ServiceCard: Field = {
  type: 'group',
  name: 'serviceCard',
  interfaceName: 'ServiceCard',
  fields: [
    IconField,
    {
      type: 'text',
      name: 'title',
    },
    ButtonField,
  ],
}
