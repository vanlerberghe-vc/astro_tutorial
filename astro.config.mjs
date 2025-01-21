// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://verdant-cendol-a61149.netlify.app/",
  integrations: [preact()]
});