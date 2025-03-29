import type { ArrayField, Field } from 'payload'

import { defu } from 'defu'
import { linkField } from './link.field'

type LinkGroupType = (options?: {
  appearances?: false
  overrides?: Partial<ArrayField>
}) => Field

export const linkGroupField: LinkGroupType = ({ overrides = {} } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      linkField(),
    ],
    admin: {
      initCollapsed: true,
    },
    interfaceName: 'LinkGroupField',
  }

  return defu(generatedLinkGroup, overrides)
}
