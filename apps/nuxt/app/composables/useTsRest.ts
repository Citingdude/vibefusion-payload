import { contract } from '@payload/ts-rest/contract'
import { initClient } from '@ts-rest/core'

export function useTsRest() {
  const { cmsBaseUrl } = useRuntimeConfig().public

  const client = initClient(contract, {
    baseUrl: `${cmsBaseUrl}/api/tsrest`,
  })

  return client
}
