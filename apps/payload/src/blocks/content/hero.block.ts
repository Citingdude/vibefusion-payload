import { Block } from "payload";
import { ImageField } from "@/fields/ImageField";
import { ButtonArrayField } from "@/fields/button/buttonArray.field";

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
    ButtonArrayField,
    ImageField
  ]
}