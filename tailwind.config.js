/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#2ad167',
        customDarkGrey: '#2a3342',
        customLightGrey: '#93a1b6',
        customWhite: '#f7f8f9',
      },
      fontFamily: {
        customFont: ['Belanosima', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

