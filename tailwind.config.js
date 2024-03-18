/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '575.98px',
      'md': '768.1px',
      'lg': '991.98px',
      'xl': '1199.98px',
      '2xl': '1399.98px',
      '3xl': '1535.98px'
    },
    extend: {},
  },
  plugins: [],
}
