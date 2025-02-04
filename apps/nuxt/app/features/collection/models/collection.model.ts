export interface Collection<T> {
  docs: T[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: null
  page: number
  pagingCounter: number
  prevPage: null
  totalDocs: number
  totalPages: number
}
