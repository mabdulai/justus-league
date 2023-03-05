import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://mabdulai.github.io',
  base: '/justus-league',
  integrations: [mdx(), sitemap(), react(), image()]
});