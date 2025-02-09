import { CaseCardField } from "@/fields/service/CaseCardField";
import { Block } from "payload";

export const CaseCardsBlock: Block = {
  slug: 'caseCardsBlock',
  interfaceName: 'CaseCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'title'
    },
    {
      type: 'array',
      name: 'caseCards',
      fields: [
        CaseCardField
      ]
    }
  ]
}