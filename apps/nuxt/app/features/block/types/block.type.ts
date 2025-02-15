import type {
  CaseCardsBlock as CaseCardsBlockDto,
  HeroBlock as HeroBlockDto,
  ServiceCardsBlock as ServiceCardsBlockDto,
} from '@payload-types'

import type { CaseCardsBlock } from '~/features/block/types/caseCardsBlock.type'
import type { HeroBlock } from '~/features/block/types/heroBlock.type'
import type { ServiceCardsBlock } from '~/features/block/types/serviceCardsBlock.type'
import type { UnsupportedBlock } from '~/features/block/types/unsupportedBlock.type'

export type BlockDto = HeroBlockDto | CaseCardsBlockDto | ServiceCardsBlockDto
export type Block = HeroBlock | CaseCardsBlock | UnsupportedBlock | ServiceCardsBlock
