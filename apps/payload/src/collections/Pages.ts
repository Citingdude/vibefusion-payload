import { CaseCardsBlock } from '@/blocks/case/caseCards.block'
import { HeroBlock } from '@/blocks/content/hero.block'
import { ServiceCardsBlock } from '@/blocks/service/serviceCards.block'
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
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar'
      }
    },
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
