import { defineConfig } from 'tinacms'

const branch = 'main'

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'src/assets',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'gallery',
        label: 'Photo Gallery',
        path: "src/content/pictures",
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'alt',
            label: 'Description',
            isBody: false,
            required: true,
          },
          {
            type: 'image',
            label: 'Picture',
            name: 'imgSrc',
          },
        ],
      },
    ],
  },
})
