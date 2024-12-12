const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['500'],
        danger: colors.red['500'],
        grayDark: '#1f1f1f',
        taskColors: {
          red: '#FF4C4C',
          yellow: '#FFC107',
          green: '#4CAF50',
          blue: '#2196F3',
          purple: '#9C27B0',
          pink: '#E91E63',
          brown: '#8D6E63',
        },
      },
    },
  },
  plugins: [],
};
