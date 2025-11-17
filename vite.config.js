import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Determine environment from GitHub Actions
const env = process.env.APP_ENV;

// GitHub project repo name
const repo = "/To-Do-Manager";

let base = `${repo}/`;

if (env === "production") {
  base = `${repo}/`;
} else if (env === "staging") {
  base = `${repo}/stage/`;
} else if (env === "development") {
  base = `${repo}/dev/`;
}

export default defineConfig({
  base,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
