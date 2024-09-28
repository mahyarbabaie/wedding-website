export default {
  // ... other config options
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primaryIndigo: '#405DAA',
        primaryBlue: '#19ABDC',
        primarySkyBlue: '#52CFFF',
      },
    },
  },
};
