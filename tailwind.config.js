/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        'primary-light': '#00000080',
        gray: '#DDDDDD',
        customGray: '#F9F9F9'
      },
      width: {
        custom: '660px',
        custom45percent: '45%'
      },
      minWidth: {
        custom: '660px'
      },
      maxWidth: {
        custom800: '800px'
      },
      lineHeight: {
        custom100percent: '100%',
        custom95px: '95px',
        custom82px: '82px',
        custom72px: '72px',
        custom50percent: '50%',
        custom40percent: '40%',
        custom25percent: '25%',
        custom30percent: '30%'
      },
      fontSize: {
        custom100percent: '100%',
        custom82px: '82px',
        customSize: '40px',
        custom30percent: '30%'
      },
      height: {
        smCustom: '500px',
        mdCustom: '630px'
      },
      minHeight: {
        custom50percent: '50%'
      },
      scale: {
        85: '0.85',
        95: '0.95',
        75: '0.75',
        70: '0.70'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
