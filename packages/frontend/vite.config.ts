import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030
  },
  preview: {
    port: 8080,
    strictPort: true
  },
  define: {
    'import.meta.env.APP_VERSION': `"${process.env.npm_package_version}"`
  }
})