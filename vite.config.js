import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' // নাম বদলে 'tailwind' দিন

export default defineConfig({
  plugins: [
    react(),
    tailwind(), // এখানেও 'tailwind' ব্যবহার করুন
  ],
})