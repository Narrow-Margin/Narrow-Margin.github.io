/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#240900',
        secondary: '#f4efeb',
      },
      fontFamily: {
        'bebas': ['Bebas', 'Arial', 'sans-serif'],
        'garamond': ['"eb-garamond"', 'serif'],
      },
      animation: {
        'jump-infinite': 'jumpInfinite 3s infinite',
      },
      keyframes: {
        jumpInfinite: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
