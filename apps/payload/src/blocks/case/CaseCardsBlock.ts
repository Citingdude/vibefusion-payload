import { CaseCardField } from "@/fields/service/CaseCardField";
import { ServiceCardField } from "@/fields/service/ServiceCardField";
import { Block } from "payload";

export const CaseCardsBlock: Block = {
  slug: 'case-cards-block',
  fields: [
    {
      type: 'array',
      name: 'case-cards',
      fields: [CaseCardField]
    }
  ]
}