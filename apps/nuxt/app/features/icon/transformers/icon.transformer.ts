import type { Icon, IconDto } from '~/features/icon/types/icon.type'

export class IconTransformer {
  static fromDto(dto: IconDto): Icon {
    return {
      name: dto.name,
      src: dto.url || null,
    }
  }
}
