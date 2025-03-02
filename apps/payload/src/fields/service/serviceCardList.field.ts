import type { ArrayField } from 'payload'
import { ServiceCard } from '@payload/fields/service/serviceCard.field'

export function ServiceCardListField(): ArrayField {
  return {
    type: 'array',
    name: 'serviceCardList',
    interfaceName: 'ServiceCardList',
    fields: [
      ServiceCard,
    ],
  }
}
