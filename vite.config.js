import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './docs',
    emptyOutDir: true, // also necessary
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})