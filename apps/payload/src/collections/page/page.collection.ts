import type { CollectionConfig } from 'payload'
import { CaseCardsBlock } from '@/blocks/case/caseCards.block'
import { HeroBlock } from '@/blocks/content/hero.block'
import { CtaBlock } from '@/blocks/cta/cta.block'
import { ServiceCardsBlock } from '@/blocks/service/serviceCards.block'
import { setUrlFromBreadcrumbsHook } from '@/collections/page/hooks/setUrlFromBreadcrumbs.hook'
import { slugField } from '@/fields/slug/slug.field'

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
    ...slugField({
      fallbackField: 'title',
    }),
    {
      type: 'text',
      name: 'url',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
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
        CtaBlock,
      ],
    },
  ],
  hooks: {
    beforeChange: [
      setUrlFromBreadcrumbsHook,
    ],
  },
}
