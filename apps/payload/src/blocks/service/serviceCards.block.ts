import { ServiceCardField } from "@/fields/service/ServiceCardField";
import { Block } from "payload";

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
        ServiceCardField
      ],
      name: 'serviceCards'
    }
  ]
}