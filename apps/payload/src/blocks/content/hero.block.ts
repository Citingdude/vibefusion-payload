import type { Block } from 'payload'
import { ImageField } from '@payload/fields/ImageField'
import { linkGroupField } from '@payload/fields/link/linkGroup.field'
import { highlightTextField } from '@payload/fields/text/highlightText.field'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    highlightTextField({
      required: true,
    }),
    {
      type: 'textarea',
      name: 'body',
    },
    linkGroupField({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
    ImageField,
  ],
}
