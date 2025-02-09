import { ServiceCardField } from "@/fields/service/ServiceCardField";
import { Block } from "payload";

export const ServiceCardsBlock: Block = {
  slug: 'service-cards-block',
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