/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        'primary-light': '#00000080',
        gray: '#DDDDDD'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};
