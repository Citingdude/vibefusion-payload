import type { Case as CaseDto } from '@payload-types'
import { getPayloadFetch } from '~~/server/utils/payload/getPayloadFetch'
import { CaseTransformer } from '~/features/case/transformers/case.transformer'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const fetch = getPayloadFetch()

  const caseDto = await fetch<CaseDto>(`/cases/${id}`)

  return CaseTransformer.fromDto(caseDto)
})
