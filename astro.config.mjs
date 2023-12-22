import { defineConfig,passthroughImageService } from 'astro/config'
// import { BASE_PATH }from './config/astro'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://eliancaby.github.io',
  image: {
    service: passthroughImageService(),
  },
})
