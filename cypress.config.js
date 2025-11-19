import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:5173/To-Do-Manager/dev/",
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
})
