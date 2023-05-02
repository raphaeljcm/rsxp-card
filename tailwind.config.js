/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        rocketseat: {
          light: '#996DFF',
          mid: '#8257E5',
          dark: '#633BBC',
          low: '#271A45',
        },
        success: {
          light: '#04D361',
          base: '#1B873F',
          low: '#051B0D',
        },
        danger: {
          light: '#F75A68',
          base: '#CC2937',
          low: '#2D090C',
        },
        new: {
          light: '#1EF7D0',
          base: '#07847E',
          low: '#163840',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
      },
      boxShadow: {
        button: 'rgba(153, 109, 255, 0.15) 0px 4px 5px 3px',
      },
      backgroundImage: {
        heading:
          'linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))',
      },
    },
  },
  plugins: [],
};
