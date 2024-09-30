export default {
  // ... other config options
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        dancingScript: ["Dancing Script", "cursive"],
        libreBaskerville: ["Libre Baskerville", "serif"],
      },
      colors: {
        primaryBG: '#FAFCF7',
        primaryIndigo: '#405DAA',
        primaryBlue: '#19ABDC',
        primarySkyBlue: '#52CFFF',
        primaryGreen: '#17B169',
        primaryLightGreen: '#DAF7A6',
        primaryBrown: '#8A642F',
      },
      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-2px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      }
    },
  },
};
