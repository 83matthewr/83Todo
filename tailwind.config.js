/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00D092',
        'primary-hover': '#00B680',
        'secondary': '#5733FF',
      }
    },
  },
  plugins: [],
}
