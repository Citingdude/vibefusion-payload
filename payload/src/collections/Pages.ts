import { CaseCardsBlock } from '@/blocks/case/CaseCardsBlock'
import { HeroBlock } from '@/blocks/content/HeroBlock'
import { ServiceCardsBlock } from '@/blocks/service/ServiceCardsBlock'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
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
        ServiceCardsBlock,
        CaseCardsBlock,
      ],
    }
  ],
}
