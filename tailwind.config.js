/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5733',
        'primary-hover': '#FF6F4F',
        'secondary': '#5733FF',
      }
    },
  },
  plugins: [],
}
