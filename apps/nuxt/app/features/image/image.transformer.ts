import type { Media as ImageDto } from '@payload-types'
import type { Image } from './image.model'

export class ImageTransformer {
  static fromDto(dto: ImageDto | number): Image | null {
    if (typeof dto === 'number') {
      return null
    }

    return {
      alt: dto.alt,
      src: dto.url || '',
    }
  }
}
