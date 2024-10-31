import { Field } from "payload";

export const ImageField: Field = {
  type: 'group',
  name: 'image',
  fields: [
    {
      type: 'text',
      name: 'src',
    },
    {
      type: 'text',
      name: 'alt'
    }
  ]
}