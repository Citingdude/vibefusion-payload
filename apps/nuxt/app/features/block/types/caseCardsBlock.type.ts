import type { CaseCard } from '~/features/case/types/caseCard.type'
import type { CaseCardArrayItemDto } from '~/features/case/types/caseCardArrayItem.type'

export interface CaseCardsBlockDto {
  id: string
  title: string
  caseCards: CaseCardArrayItemDto[]
  blockType: 'caseCardsBlock'
}

export interface CaseCardsBlock {
  title: string | null
  cases: CaseCard[]
  blockType: 'caseCards'
}
