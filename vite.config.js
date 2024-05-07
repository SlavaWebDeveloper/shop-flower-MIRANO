import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import jsx from '@/js/jsx.js'",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
      jpeg: {
        quality: 80,
      },
      svg: {
        
      }
    })
  ]
})