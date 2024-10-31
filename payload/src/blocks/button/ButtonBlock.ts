import { Block } from "payload";

export const ButtonBlock: Block = {
  slug: 'button',
  fields: [
    {
      type: 'text',
      name: 'Label',
      required: true,
    },
    {
      type: 'text',
      name: 'url',
    }
  ]
}