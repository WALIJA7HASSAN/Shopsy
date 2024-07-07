/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
        moonstone: '#4da1a9',
        yinminblue: '#2e5077',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
}

