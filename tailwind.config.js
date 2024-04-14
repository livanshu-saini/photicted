/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        bgGrey:"#b0abab",
        bgWhite:"#d8d8d8"
      }
    },
  },
  plugins: [],
}

