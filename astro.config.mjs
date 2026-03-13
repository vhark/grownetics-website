import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    remotePatterns: [],
  },
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
