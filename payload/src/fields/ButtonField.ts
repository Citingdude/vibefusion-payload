import { Field } from "payload";

export const ButtonField: Field = {
  type: 'group',
  name: 'button',
  fields: [
    {
      type: 'text',
      name: 'Label'
    },
    {
      type: 'text',
      name: 'link'
    }
  ]
}