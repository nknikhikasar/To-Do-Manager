import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// GitHub project repo name (no trailing slash)
const repo = "To-Do-Manager";

// Environment passed from GitHub Actions
const env = process.env.APP_ENV;

// Correct base path per environment
let base = `/${repo}/`; // default

if (env === "production") {
  base = `/${repo}/`;
} else if (env === "staging") {
  base = `/${repo}/stage/`;
} else if (env === "development") {
  base = `/${repo}/dev/`;
}

console.log("⭐ VITE BUILD ENV:", env, "| BASE:", base);

export default defineConfig({
  base,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
