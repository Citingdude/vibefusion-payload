import type { Image, ImageDto } from '~/features/image/types/image.type'

export class ImageTransformer {
  static fromDto(dto: ImageDto): Image {
    return {
      alt: dto.alt,
      src: dto.url,
    }
  }
}
