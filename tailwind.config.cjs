/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black : "#0d0d0d",
      pink: "#ed2553"
    },
    textColor: {
      white: "#FFF",  
      black: "#000",  
    },
    extend: {},
  },
  plugins: [],
}
