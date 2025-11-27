


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/gbfest/",  // ✅ matches your repo name
  plugins: [react()],
});




