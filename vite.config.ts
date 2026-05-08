import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
plugins: [
  react(), 
  tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
    includeAssets: ['**/*'],
    manifest: {
      name: 'Alberta Bee Adventure',
      short_name: 'Alberta Bees',
      description: 'Learn about beekeeping in Alberta, Canada',
      start_url: './',
      display: 'standalone',
      background_color: '#f0f9ff',
      theme_color: '#fbbf24',
      icons: [
        {
          src: './manifest.json',
          sizes: 'any',
          type: 'image/svg+xml',
        },
      ],
    },
  })
],
base: './',
resolve: {
alias: {
  '@': path.resolve(__dirname, '.'),
},
},
});