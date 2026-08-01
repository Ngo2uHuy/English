import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2022',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@supabase')) {
              return 'vendor-supabase';
            }
            return 'vendor';
          }
          if (id.includes('src/data/games-data.js')) {
            return 'data-games';
          }
          if (id.includes('src/data/grammar-data.js') || id.includes('src/data/skills-exercises-data.js')) {
            return 'data-core';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
