import { defineConfig } from 'astro/config';
// import { BASE_PATH }from './config/astro'

import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  site: 'https://eliancaby.github.io',
});