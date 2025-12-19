import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['.codei9.shop', 'codei9.shop'],
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
        host: 'codei9.shop',
        protocol: 'wss'
    }
  }
})
