import type { Block } from 'payload'
import { highlightTextField } from '@payload/fields/text/highlightText.field'
import { ButtonArrayField } from '../../fields/button/buttonArray.field'
import { ImageField } from '../../fields/ImageField'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    highlightTextField({
      required: true,
    }),
    {
      type: 'textarea',
      name: 'body',
    },
    ButtonArrayField,
    ImageField,
  ],
}
