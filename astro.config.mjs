import { defineConfig } from 'astro/config';
// import { BASE_PATH }from './config/astro'

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://eliancaby.github.io',
  base: '/haraldv2',
});