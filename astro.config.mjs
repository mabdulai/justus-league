import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
    site: 'https://mabdulai.github.io',
    base: '/justus-league',
    integrations: [mdx(), sitemap(), react()],
});
