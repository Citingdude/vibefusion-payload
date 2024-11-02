import { HeroBlock } from '@/blocks/content/HeroBlock'
import { ServiceCardsBlock } from '@/blocks/service/ServiceCardsBlock'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        HeroBlock,
        ServiceCardsBlock
      ],
    }
  ],
}
