import type { CaseCardsBlock, CaseCardsBlockDto } from '~/features/block/types/caseCardsBlock.type'
import type { HeroBlock, HeroBlockDto } from '~/features/block/types/heroBlock.type'

export type BlockDto = HeroBlockDto | CaseCardsBlockDto
export type Block = HeroBlock | CaseCardsBlock
