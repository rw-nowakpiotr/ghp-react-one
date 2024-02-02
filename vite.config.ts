import { defineConfig, } from 'vite'
import  mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  server: {
      https: true,
      port: 6363
  },
  plugins: [react(), mkcert()],
})