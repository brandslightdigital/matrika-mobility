import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  server: {
    host: true, // Listen on all network interfaces
    allowedHosts: [
      'taxitribe.in',
      'www.taxitribe.in'
    ]
  },
  preview: {
    host: true,
    port: 5173 // Or whatever port your SSR server uses
  }
})
