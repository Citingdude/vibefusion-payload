import type { Block } from 'payload'
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
    {
      type: 'textarea',
      name: 'body',
    },
    ButtonArrayField,
    ImageField,
  ],
}
