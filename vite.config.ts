import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [solid(), tailwindcss(), cssInjectedByJsPlugin()],
  build: {
    outDir: "./dist/",
  }
})
