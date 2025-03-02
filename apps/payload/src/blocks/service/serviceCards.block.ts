import type { Block } from 'payload'
import { ServiceCardListField } from '@payload/fields/service/serviceCardList.field'

export const ServiceCardsBlock: Block = {
  slug: 'serviceCardsBlock',
  interfaceName: 'ServiceCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    ServiceCardListField(),
  ],
}
