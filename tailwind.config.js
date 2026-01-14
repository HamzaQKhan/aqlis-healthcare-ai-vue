/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ethicalTeal: '#246F66',
        compassionMint: '#AEC8B9',
        humaneGrey: '#383838',
        insightTeal: '#367E72',
        pureWhite: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

