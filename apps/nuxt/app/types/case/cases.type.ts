import type { Case } from '~/features/case/types/case.type'

export default interface Cases {
  data: Case[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
