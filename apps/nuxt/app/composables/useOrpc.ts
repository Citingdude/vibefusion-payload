import type { RouterClient } from '@orpc/server'
import type { orpcRouter } from '@repo/payload'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'

export function useOrpc() {
  const { orpcUrl } = useRuntimeConfig().public
  const link = new RPCLink({
    url: orpcUrl,
  })

  const client: RouterClient<typeof orpcRouter> = createORPCClient(link)

  return client
}
