import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Dev: proxy to Express; Production on Plesk: PHP handles it natively
      '/api': 'http://localhost:3001',
    },
  },
})
