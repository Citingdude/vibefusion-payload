import type { CaseCardsBlock as CaseCardsBlockDto } from '@repo/payload'
import type { CaseCardsBlock } from '~/features/block/types/caseCardsBlock.type'
import { CaseCardTransformer } from '~/features/case/transformers/caseCard.transformer'

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
