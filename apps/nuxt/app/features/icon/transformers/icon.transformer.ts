import type { Icon as IconDto } from '@repo/payload'
import type { Icon } from '~/features/icon/types/icon.type'

export class IconTransformer {
  static fromDto(dto: IconDto | number): Icon | null {
    if (typeof dto === 'number') {
      return null
    }

    return {
      name: dto.name,
      src: dto.url || null,
    }
  }
}
