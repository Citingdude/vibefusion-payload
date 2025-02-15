import type { CaseCardArrayItem, CaseCardArrayItemDto } from '~/features/case/types/caseCardArrayItem.type'
import { CaseCardTransformer } from '~/features/case/transformers/caseCard.transformer'

export class CaseCardArrayItemTransformer {
  static fromDto(dto: CaseCardArrayItemDto): CaseCardArrayItem {
    return {
      case: CaseCardTransformer.fromDto(dto.case),
      id: dto.id,
    }
  }
}
