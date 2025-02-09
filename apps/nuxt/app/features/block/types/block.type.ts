import type {
  CaseCardsBlock as CaseCardsBlockDto,
  HeroBlock as HeroBlockDto,
  ServiceCardsBlock as ServiceCardsBlockDto,
} from '@payload-types'
import type { CasesBlock } from '~/features/block/types/casesBlock.type'
import type { HeroBlock } from '~/features/block/types/heroBlock.type'

interface UnsupportedBlock {
  blockType: 'unsupportedBlock'
}

export type BlockDto = HeroBlockDto
  | CaseCardsBlockDto
  | ServiceCardsBlockDto

export type Block = HeroBlock
  | UnsupportedBlock
  | CasesBlock
