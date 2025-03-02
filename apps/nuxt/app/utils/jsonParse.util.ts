import type { SerializeObject } from 'nitropack'

type Flatten<T> = T extends Array<SerializeObject<infer R>> ? Array<R> : T extends SerializeObject<infer R> ? R : T

export function jsonParse<T>(data: T): Flatten<T> {
  const deserialized = JSON.parse(JSON.stringify(data))

  return deserialized
}
