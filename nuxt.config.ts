import { resolve } from "path";

export default defineNuxtConfig({
  // modules dependencies
  modules: [
    '@pinia/nuxt'
  ],
  // plugins dependencies
  plugins: [
    '~/plugins/axios/index.ts'
  ],
  // alias config
  alias: {
      "@components": resolve(__dirname, './src/components'),
      "@pages": resolve(__dirname, './src/pages'),  
      "@assets": resolve(__dirname, './public/assets'),
      "@stores": resolve(__dirname, './src/stores'),
      "@plugins": resolve(__dirname, './src/plugins'),
  },
  // active dev toos
  devtools: { enabled: false },
  // src dir
  srcDir: 'src/',
  // tailwind css
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css
  css: [
    resolve(__dirname, './public/assets/css/main.scss')
  ],
})
