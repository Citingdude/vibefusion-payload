import type { CaseCardsBlock, CaseCardsBlockDto } from '~/features/block/types/caseCardsBlock.type'
import { CaseCardArrayItemTransformer } from '~/features/case/transformers/caseCardArrayItem.transformer'

export class CaseCardsBlockTransformer {
  static fromDto(dto: CaseCardsBlockDto): CaseCardsBlock {
    return {
      blockType: 'caseCards',
      id: dto.id,
      title: dto.title,
      cases: dto.caseCards.map(CaseCardArrayItemTransformer.fromDto),
    }
  }
}
