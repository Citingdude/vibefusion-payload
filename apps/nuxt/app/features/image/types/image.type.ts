export interface ImageDto {
  id: number
  alt: string
  updatedAt: string
  createdAt: string
  url: string
  thumbnailURL: string | null
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number | null
  focalY: number | null
}

export interface Image {
  src: string | undefined
  alt: string
}
