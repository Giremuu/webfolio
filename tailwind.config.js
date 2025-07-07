/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        9999: '9999', // ✅ bien à l'intérieur de extend dans theme
      },
    },
  },
  plugins: [],
}
