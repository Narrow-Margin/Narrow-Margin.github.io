/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      h2: {
        fontFamily: 'Bebas',
        fontSize: 'clamp(3.5rem, 4.5vw, 5rem)',
        alignItems: 'center',
        color: '#240900',
        letterSpacing: '-3px',
        margin: '0px',
        height: '100%',
        lineHeight: '65px',
      },
      h3: {
        fontFamily: 'Garamond',
        margin: '0',
        letterSpacing: '-1px',
        fontWeight: '200',
        fontSize: 'clamp(1.4rem, 1.7vw, 1.8rem)',
        lineHeight: '20px',
      },
      h4: {
        margin: 0,
        letterSpacing: '-1.2px',
        fontFamily: 'eb-garamond',
        fontSize: 'clamp(0.8rem, 1.2vw, 1.2rem)',
        fontWeight: 200,
      },
      colors: {
        primary: '#240900',
        secondary: '#f4efeb',
        tertiary: '#5f5f5f',
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
