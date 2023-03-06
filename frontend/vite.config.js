import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [FullReload(['src/**/*'], { delay: 200 }), vue()],
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
