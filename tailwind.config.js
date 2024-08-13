/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#DC6B19', // Custom color
      },
      fontFamily:{
        "hero-font": "Sriracha",
      },
    },
  },
  plugins: [],
}

