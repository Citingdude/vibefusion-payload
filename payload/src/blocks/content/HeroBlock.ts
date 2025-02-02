import { Block } from "payload";
import { ButtonField } from "@/fields/ButtonField";
import { ImageField } from "@/fields/ImageField";

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'textarea',
      name: 'body',
    },
    {
      type: 'array',
      name: 'buttons',
      fields: [ButtonField],
      maxRows: 2
    },
    ImageField
  ]
}