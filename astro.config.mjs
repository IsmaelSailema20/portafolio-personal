import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  //integrations: [tailwind()],
  site: 'https://IsmaelSailema20.github.io',
  base: '/portafolio-personal',
  vite: {
    plugins: [tailwindcss()],
  },
});
