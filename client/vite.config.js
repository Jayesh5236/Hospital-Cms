import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api" :{
        target: "http://172.22.51.89:5000",
        changeOrigin: true,
      }
    }
  }
})
