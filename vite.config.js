import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Important for mobile
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    host: true
  }
})
