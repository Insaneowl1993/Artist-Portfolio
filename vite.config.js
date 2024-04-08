// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration options here
  build: {
    rollupOptions: {
      input: {
        customElement: 'customElement/artist-portfolio.html',
        template: 'template/artist-portfolio.html'
      }
    }
  }
});
