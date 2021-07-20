import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { root, srcPath } from './config/basePath'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@@': root,
      '@': srcPath
    },
  }
})
