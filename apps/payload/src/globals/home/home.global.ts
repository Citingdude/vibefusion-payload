import type { GlobalConfig } from 'payload'
import { CaseCardsBlock } from '@payload/blocks/case/caseCards.block'
import { HeroBlock } from '@payload/blocks/content/hero.block'
import { CtaBlock } from '@payload/blocks/cta/cta.block'
import { ServiceCardsBlock } from '@payload/blocks/service/serviceCards.block'

export const homeGlobal: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      type: 'blocks',
      name: 'content',
      blocks: [
        HeroBlock,
        ServiceCardsBlock,
        CaseCardsBlock,
        CtaBlock,
      ],
    },
  ],
}
