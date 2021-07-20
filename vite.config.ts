import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { root, srcPath } from './config/basePath'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  resolve: {
    alias: {
      '@@': root,
      '@': srcPath
    },
  }
})
