// vite.config.js - BETTER VERSION
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    minify: 'esbuild',
    cssCodeSplit: false,
    // Safe rollup options
    rollupOptions: {
      output: {
        // Only chunk non-react dependencies
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React ko chunk se bahar rakho
            if (id.includes('react') || id.includes('react-dom')) {
              return undefined;
            }
            // Other vendors ko chunk karo
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
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

