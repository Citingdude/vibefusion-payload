import type { UseFetchOptions } from 'nuxt/app'
import type { ZodSchema } from 'zod'

type FetchUrl = string | Request | Ref<string | Request> | (() => string | Request)

export async function useApiFetch<T, dataT = T>(
  url: FetchUrl,
  options: UseFetchOptions<T, dataT> = {},
  schema?: ZodSchema,
) {
  return useFetch(url, {
    baseURL: useAPIBase(),
    ...options,
    onResponse: (context) => {
      parseZodSchema(schema, context.response._data)
    },
  })
}

function parseZodSchema(schema: ZodSchema | undefined, data: any) {
  if (!schema)
    return

  const parsedData = schema.safeParse(data)

  if (parsedData.success)
    return

  console.error(parsedData.error)
}
