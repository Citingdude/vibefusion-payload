import type { CaseCard, CaseCardDto } from '~/features/case/types/caseCard.type'

export interface CaseCardArrayItemDto {
  id: string
  case: CaseCardDto
}

export interface CaseCardArrayItem {
  id: string
  case: CaseCard
}
