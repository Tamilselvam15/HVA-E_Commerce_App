import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createProxyMiddleware } from 'http-proxy-middleware';


// https://vitejs.dev/config/
export default defineConfig({
  base:'/HVA-E_Commerce_App',
  plugins: [react()],
  //  server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://dummyjson.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
