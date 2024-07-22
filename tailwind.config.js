/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      textColor: {
        'muted-foreground': '#A1A1A1'
      },
      backgroundColor: {
        secondary: '#F2F2F2'
      },
      fontSize: {
        '60vw': '60vw',
        '50vw': '50vw',
        '30vw': '30vw',
        '15vw': '15vw',
        '20vw': '20vw'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
