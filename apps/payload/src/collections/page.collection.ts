import type { CollectionConfig } from 'payload'
import { CaseCardsBlock } from '@/blocks/case/caseCards.block'
import { HeroBlock } from '@/blocks/content/hero.block'
import { ServiceCardsBlock } from '@/blocks/service/serviceCards.block'
import { SlugField } from '@/fields/slug/slug.field'

export const PageCollection: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'slug'],
  },
  fields: [
    SlugField,
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
    },
  ],
}
