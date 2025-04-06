import type {
  CaseCardsBlock as CaseCardsBlockDto,
  CtaBlock as CtaBlockDto,
  HeroBlock as HeroBlockDto,
  KpiBlock as KpiBlockDto,
  ServiceCardsBlock as ServiceCardsBlockDto,
} from '@repo/payload'

import type { CaseCardsBlock } from '~/features/block/types/caseCardsBlock.type'
import type { CtaBlock } from '~/features/block/types/ctaBlock.type'
import type { HeroBlock } from '~/features/block/types/heroBlock.type'
import type { ServiceCardsBlock } from '~/features/block/types/serviceCardsBlock.type'
import type { UnsupportedBlock } from '~/features/block/types/unsupportedBlock.type'

export type BlockDto = HeroBlockDto | CaseCardsBlockDto | ServiceCardsBlockDto | CtaBlockDto | KpiBlockDto
export type Block = HeroBlock | CaseCardsBlock | UnsupportedBlock | ServiceCardsBlock | CtaBlock
