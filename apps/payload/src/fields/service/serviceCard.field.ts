import type { Field } from 'payload'
import { IconField } from '@payload/fields/icon/icon.field'
import { linkField } from '@payload/fields/link/link.field'

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
    linkField(),
  ],
}
