import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change from 5173 to 3000
    host: "0.0.0.0", // Ensures it's accessible from Docker
    strictPort: true, // Ensures Vite only runs on this port
  },
})
