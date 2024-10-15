import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',  // Ensures relative paths are used
  build: {
    outDir: 'dist',  // Default output directory for Vite, ensure it matches in Vercel settings
  },
});
