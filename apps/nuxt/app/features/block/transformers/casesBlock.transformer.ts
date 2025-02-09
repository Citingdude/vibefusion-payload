import type { CaseCardsBlock as CaseCardsBlockDto } from '@payload-types'
import type { CasesBlock } from '~/features/block/types/casesBlock.type'
import { CaseCardTransformer } from '~/features/case/transformers/caseCard.transformer'

export class CasesBlockTransformer {
  static fromDto(dto: CaseCardsBlockDto): CasesBlock {
    return {
      blockType: 'casesBlock',
      id: dto.id || '',
      title: dto.title || undefined,
      cases: !dto.caseCards
        ? []
        : dto.caseCards.map((card) => {
            return CaseCardTransformer.fromDto(card.case)
          }),
    }
  }
}
