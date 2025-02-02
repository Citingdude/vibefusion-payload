import { stringify } from 'qs-esm'

export function getPayloadQuery(query: Record<string, unknown>) {
  return stringify(
    {
      where: query,
    },
    { addQueryPrefix: true },
  )
}
