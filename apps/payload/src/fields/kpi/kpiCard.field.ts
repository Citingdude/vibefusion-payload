import type { GroupField } from 'payload'
import { IconField } from '@payload/fields/icon/icon.field'

export function KpiCardField(): GroupField {
  return {
    type: 'group',
    name: 'kpiCard',
    interfaceName: 'KpiCard',
    fields: [
      IconField,
      {
        type: 'text',
        required: true,
        name: 'title',
      },
      {
        type: 'textarea',
        name: 'body',
        required: true,
      },
    ],
  }
}
