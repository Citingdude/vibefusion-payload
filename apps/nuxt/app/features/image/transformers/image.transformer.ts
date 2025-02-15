import type { Media as ImageDto } from '@payload-types'
import type { Image } from '~/features/image/types/image.type'

export class ImageTransformer {
  static fromDto(dto: ImageDto | number): Image | null {
    if (typeof dto === 'number') {
      return null
    }

    return {
      alt: dto.alt,
      src: dto.url || undefined,
    }
  }
}
