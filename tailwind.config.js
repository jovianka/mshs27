/** @type {import('tailwindcss').Config} */

const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    "./components/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",

    "./pages/*.vue",
    "./pages/**/*.vue",

    "./layouts/*.vue",
    "./layouts/**/*.vue",
    
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",

    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  plugins: [FormKitVariants],
  theme: {
    extend: {
      fontFamily: {
        display: "Code Next",
        script: "Dancing Script",
        body: "Lora"
      },
      colors: {
        accent1: "#DBC07A",
        accent2: "#670404"
      }
    },
  },
  plugins: [],
}
