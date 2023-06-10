import { resolve } from "path";

export default defineNuxtConfig({
  // alias config
  alias: {
      "@components": resolve(__dirname, './src/components'),
      "@pages": resolve(__dirname, './src/pages'),  
      "@assets": resolve(__dirname, './public/assets'),
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
