import type { Image, ImageDto } from '~/features/image/models/image.model'

export class ImageTransformer {
  static fromDto(dto: ImageDto): Image {
    return {
      alt: dto.alt,
      src: dto.url,
    }
  }
}
