import type { CaseCardsBlock as CaseCardsBlockDto, Case as CaseDto } from '@payload-types'
import type { CaseCardsBlock } from '~/features/block/types/caseCardsBlock.type'
import { CaseCardTransformer } from '~/features/case/transformers/caseCard.transformer'

function isCase(item: { case: number | CaseDto }): item is { case: CaseDto } {
  return typeof item.case !== 'number'
}

export class CaseCardsBlockTransformer {
  static fromDto(dto: CaseCardsBlockDto): CaseCardsBlock {
    const caseCards = dto.caseCards?.flatMap(val => typeof val.case === 'number' ? [] : val.case) || []

    return {
      blockType: 'caseCards',
      title: dto.title || null,
      cases: caseCards.map(CaseCardTransformer.fromDto),
    }
  }
}
