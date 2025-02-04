import type { Image, ImageDto } from './image.model'

export class ImageTransformer {
  static fromDto(dto: ImageDto): Image {
    return {
      alt: dto.alt,
      src: dto.url,
    }
  }
}
