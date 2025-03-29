import type { BasePayload } from 'payload'
import { createSeeder } from '@payload/seeders/seeder'

export const homePageSeeder = createSeeder('homepage', seedHomePage)

export async function seedHomePage(payload: BasePayload) {
  await payload.create({
    collection: 'pages',
    data: {
      slug: 'home',
      content: [
        {
          blockType: 'hero',
          highlightTitle: {
            title: {

              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [

                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [

                      {
                        mode: 'normal',
                        text: 'Testing',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            html: '<p>Testing</p>',
          },
        },
      ],
      title: 'home',
      pageType: 'home',
    },
  })
}
