// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://SheldonPierce.github.io",
  base: "/vincent-portfolio",
  vite: {
    plugins: [tailwindcss()]
  }
});