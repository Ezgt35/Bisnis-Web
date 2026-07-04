/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f5ede3',
          200: '#e8d5c4',
          300: '#d4b896',
          400: '#c19a6b',
          500: '#a67c52',
          600: '#8b6340',
          700: '#6f4c32',
          800: '#5a3d2a',
          900: '#4a3223',
        },
        forest: {
          50: '#f4f9f4',
          100: '#e6f2e6',
          200: '#c9e0c9',
          300: '#9ec49e',
          400: '#6fa36f',
          500: '#4d864d',
          600: '#3b6b3b',
          700: '#305630',
          800: '#284528',
          900: '#1a2c1a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f7f1e4',
          300: '#f0e5d3',
          400: '#e6d6bc',
          500: '#d9c49f',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
