import type { Icon as IconDto } from '@payload-types'
import type { Icon } from '~/features/icon/types/icon.type'

export class IconTransformer {
  static fromDto(dto: IconDto): Icon {
    return {
      name: dto.name,
      src: dto.url || null,
    }
  }
}
