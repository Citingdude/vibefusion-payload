import { Block } from "payload";
import { ButtonField } from "@/fields/ButtonField";
import { ImageField } from "@/fields/ImageField";

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      type: 'text',
      name: 'Title',
      required: true,
    },
    {
      type: 'textarea',
      name: 'body',
    },
    {
      type: 'array',
      name: 'Buttons',
      fields: [ButtonField],
      maxRows: 2
    },
    ImageField
  ]
}