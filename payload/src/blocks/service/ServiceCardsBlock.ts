import { ServiceCardField } from "@/fields/service/ServiceCardField";
import { Block } from "payload";

export const ServiceCardsBlock: Block = {
  slug: 'service-cards-block',
  fields: [
    {
      type: 'array',
      fields: [
        ServiceCardField
      ],
      name: 'service-cards'
    }
  ]
}