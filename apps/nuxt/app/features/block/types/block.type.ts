import type { CaseCardsBlock, CaseCardsBlockDto } from '~/features/block/models/caseCardsBlock.model'
import type { HeroBlock, HeroBlockDto } from '~/features/block/models/heroBlock.model'
import type { ServiceCardsBlockDto } from '~/features/block/models/serviceCardsBlock.model'

interface UnsupportedBlock {
  blockType: 'unsupportedBlock'
}

export type BlockDto = HeroBlockDto
  | CaseCardsBlockDto
  | ServiceCardsBlockDto

export type Block = HeroBlock
  | UnsupportedBlock
  | CaseCardsBlock
