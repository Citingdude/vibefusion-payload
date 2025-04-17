import type { Block } from 'payload'
import { KpiCardField } from '@payload/fields/kpi/kpiCard.field'

export const KpiBlock: Block = {
  slug: 'kpiBlock',
  interfaceName: 'KpiBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      type: 'array',
      name: 'kpiCards',
      fields: [
        KpiCardField(),
      ],
      maxRows: 6,
    },
  ],
}
