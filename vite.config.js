import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "headerSubApp",
    filename: "remoteEntry.js",
    exposes: {
      './HeaderApp': './src/main',
    },
    shared: ["react", "react-dom"],
  })],

    
})
