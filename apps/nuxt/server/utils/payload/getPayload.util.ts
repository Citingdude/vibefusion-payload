import { config } from '@repo/payload'
import { getPayload } from 'payload'

export default () => {
  return getPayload({ config })
}
