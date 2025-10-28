import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    copyPublicDir: true,
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
  },
  server: {
    port: 5173,
    host: true
  },
  publicDir: 'public'
})
