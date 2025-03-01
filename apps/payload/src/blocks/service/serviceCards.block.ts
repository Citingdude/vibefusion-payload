import type { Block } from 'payload'
import { ServiceCard } from '../../fields/service/serviceCard.field'

export const ServiceCardsBlock: Block = {
  slug: 'serviceCardsBlock',
  interfaceName: 'ServiceCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'array',
      fields: [
        ServiceCard,
      ],
      name: 'serviceCards',
    },
  ],
}
