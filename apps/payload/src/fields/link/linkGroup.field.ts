import type { ArrayField, Field } from 'payload'
import type { LinkAppearances } from './link.field'

import { defu } from 'defu'
import { linkField } from './link.field'

type LinkGroupType = (options?: {
  appearances?: LinkAppearances[] | false
  overrides?: Partial<ArrayField>
}) => Field

export const linkGroupField: LinkGroupType = ({ appearances, overrides = {} } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      linkField({
        appearances,
      }),
    ],
    admin: {
      initCollapsed: true,
    },
    interfaceName: 'LinkGroupField',
  }

  return defu(generatedLinkGroup, overrides)
}
