import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      host: 'localhost'
    },
    // Allow all hosts during development
    allowedHosts: [
      '.e2b.dev',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    // Allow all hosts for preview server
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // Allow all hosts during preview
    allowedHosts: [
      '.e2b.dev',
      'localhost',
      '127.0.0.1', 
      '0.0.0.0'
    ]
  }
})