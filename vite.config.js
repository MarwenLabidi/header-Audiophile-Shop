import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),federation({
    name: "header",
    filename: "remoteEntry.js",
    exposes: {
      './Header': './src/App.jsx',
    },
    shared: ["react", "react-dom"],
  })],

    
})
