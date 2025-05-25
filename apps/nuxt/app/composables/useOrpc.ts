import type { RouterClient } from '@orpc/server'
import type { orpcRouter } from '@repo/payload'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'

function customFetch(input: RequestInfo, init?: RequestInit) {
  return fetch(input, {
    ...init,
    credentials: 'include',
  })
}

export function useOrpc() {
  const link = new RPCLink({
    url: `http://localhost:4000/api/rpc`,
    fetch: customFetch,
  })

  const client: RouterClient<typeof orpcRouter> = createORPCClient(link)

  return client
}
