import { CaseCardTransformer } from '~/features/case/transformers/caseCard.transformer'
import type { CaseCardArrayItem, CaseCardArrayItemDto } from '~/features/case/types/caseCardArrayItem.type'

export class CaseCardArrayItemTransformer {
  static fromDto(dto: CaseCardArrayItemDto): CaseCardArrayItem {
    return {
      case: CaseCardTransformer.fromDto(dto.case),
      id: dto.id,
    }
  }
}
