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
      'xxl': '1350px',
      '2xl': '1399.98px',
      '3xl': '1535.98px'
    },
    extend: {
      content: {
        'beforeArrow': 'url("./assets/images/svg/arrow-icon.svg")'
      }
    },
  },
  plugins: [],
}
