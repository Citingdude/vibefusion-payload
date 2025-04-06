import type { CollectionConfig } from 'payload'
import { FaqBlock } from '@payload/blocks/faq/faq.block'
import { KpiBlock } from '@payload/blocks/kpi/kpi.block'
import { CaseCardsBlock } from '../../blocks/case/caseCards.block'
import { HeroBlock } from '../../blocks/content/hero.block'
import { CtaBlock } from '../../blocks/cta/cta.block'
import { ServiceCardsBlock } from '../../blocks/service/serviceCards.block'
import { slugField } from '../../fields/slug/slug.field'
import { setUrlFromBreadcrumbsHook } from './hooks/setUrlFromBreadcrumbs.hook'

export const PageCollection: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'slug', 'pageType'],
    livePreview: {
      url({ data }) {
        if (data.slug === 'home') {
          return 'http://localhost:3000'
        }

        return `http://localhost:3000/${data.slug}`
      },
    },
  },
  defaultPopulate: {
    slug: true,
    title: true,
    url: true,
    parent: true,
    pageType: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'blocks',
              blocks: [
                HeroBlock,
                ServiceCardsBlock,
                CaseCardsBlock,
                CtaBlock,
                KpiBlock,
                FaqBlock,
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
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
      type: 'select',
      name: 'pageType',
      enumName: 'page_type',
      unique: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Home',
          value: 'home',
        },
      ],
    },

  ],
  hooks: {
    beforeChange: [
      setUrlFromBreadcrumbsHook,
    ],
  },
}
