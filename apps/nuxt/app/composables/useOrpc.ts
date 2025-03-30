import type { RouterClient } from '@orpc/server'
import type { orpcRouter } from '@repo/payload'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'

export function useOrpc() {
  const link = new RPCLink({
    url: `http://localhost:4000/api/rpc`,
  })

  const client: RouterClient<typeof orpcRouter> = createORPCClient(link)

  return client
}
