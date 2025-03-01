import type { Block } from 'payload'
import { CaseCardField } from '../../fields/service/CaseCardField'

export const CaseCardsBlock: Block = {
  slug: 'caseCardsBlock',
  interfaceName: 'CaseCardsBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'array',
      name: 'caseCards',
      fields: [
        CaseCardField,
      ],
    },
  ],
}
