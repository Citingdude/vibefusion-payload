import { Field } from "payload";

export const ImageField: Field = {
  type: 'upload',
  name: 'image',
  relationTo: 'media',
}