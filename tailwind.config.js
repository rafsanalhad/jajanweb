/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['"Sansita Swashed"', 'cursive'],
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        'text' : '#3A3A3A',
        'button' : '#0597FA',
        'white' : 'F0F0F0',
          
      }
    },
  },
  plugins: [],
}