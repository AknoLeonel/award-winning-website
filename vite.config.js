import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap', '@gsap/react'], // Separa o GSAP em um arquivo próprio
          reactVendor: ['react', 'react-dom'], // Separa o React
        },
      },
    },
  },
})