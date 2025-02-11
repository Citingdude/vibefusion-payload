import type { CaseCardArrayItem, CaseCardArrayItemDto } from '~/features/case/types/caseCardArrayItem.type'

export interface CaseCardsBlockDto {
  id: string
  title: string
  caseCards: CaseCardArrayItemDto[]
  blockType: 'caseCardsBlock'
}

export interface CaseCardsBlock {
  id: string
  title?: string
  cases: CaseCardArrayItem[]
  blockType: 'caseCards'
}
