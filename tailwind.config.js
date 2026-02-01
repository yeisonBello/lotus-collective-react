/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        'serif-display': ['Instrument Serif', 'serif'],
      },
      colors: {
        'lotus-red': '#FF3B30',
      },
    },
  },
  plugins: [],
}
