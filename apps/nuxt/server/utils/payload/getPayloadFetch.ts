export function getPayloadFetch() {
  const baseURL = useRuntimeConfig().public.payloadApiBaseUrl

  const fetch = $fetch.create({
    baseURL,
  })

  return fetch
}
