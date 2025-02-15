import type { CaseCardsBlock, CaseCardsBlockDto } from '~/features/block/types/caseCardsBlock.type'
import type { HeroBlock, HeroBlockDto } from '~/features/block/types/heroBlock.type'
import type { ServiceCardsBlock, ServiceCardsBlockDto } from '~/features/block/types/serviceCardsBlock.type'
import type { UnsupportedBlock } from '~/features/block/types/unsupportedBlock.type'

export type BlockDto = HeroBlockDto | CaseCardsBlockDto | ServiceCardsBlockDto
export type Block = HeroBlock | CaseCardsBlock | UnsupportedBlock | ServiceCardsBlock
