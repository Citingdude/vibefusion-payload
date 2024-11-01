import type Cases from '~/types/case/cases.type'

interface Options {
  start?: number
  limit?: number
}

export async function fetchCases(options?: Options) {
  const start = options?.start || 0
  const limit = options?.limit || 2

  return useApiFetch('cases', {
    transform: (response: Cases) => response.data,
    query: {
      'populate': '*',
      'pagination[start]': start,
      'pagination[limit]': limit,
    },
  })
}
