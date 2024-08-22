import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [ svelte(), vue(), tailwind()]
});