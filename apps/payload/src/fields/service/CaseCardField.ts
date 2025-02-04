import { Field, StaticLabel  } from "payload";

export const CaseCardField: Field = {
  type: 'relationship',
  relationTo: 'cases',
  name: 'case-card',
  admin: {
    
  }
}