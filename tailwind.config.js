/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{jsx,js,tsx,ts}',
    './components/**/*.{jsx,js,tsx,ts}',
  ],
  theme: {
    fontFamily: {
      caveat: ['Caveat', 'cursive'],
      homemade: ['Homemade Apple', 'cursive'],
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
