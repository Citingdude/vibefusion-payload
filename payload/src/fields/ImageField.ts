import { Field } from "payload";

export const ImageField: Field = {
  type: 'group',
  name: 'image',
  fields: [
    {
      type: 'upload',
      name: 'src',
      relationTo: 'media',
    },
  ]
}