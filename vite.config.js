import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set the root directory if needed
  build: {
    target: 'esnext',
    outDir: 'dist', // Specify output directory for build files
  },
});
