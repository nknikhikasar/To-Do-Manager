import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Determine environment from GitHub Actions
const env = process.env.APP_ENV;

let base = "/";

if (env === "production") {
  base = "/";
} else if (env === "staging") {
  base = "/stage/";
} else if (env === "development") {
  base = "/dev/";
}

export default defineConfig({
  base,
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
