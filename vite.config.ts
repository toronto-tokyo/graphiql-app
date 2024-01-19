/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest-setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      all: true,
      exclude: [
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
        'src/shared/types.ts',
        'src/shared/constants.ts',
        'src/main.tsx',
      ],
    },
  },
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      hoc: '/src/hoc',
      hook: '/src/hook',
      layouts: '/src/layouts',
      locales: '/src/locales',
      pages: '/src/pages',
      store: '/src/store',
      router: '/src/router',
      shared: '/src/shared',
      test: '/src/test',
      utils: '/src/utils',
    }
  }
});
