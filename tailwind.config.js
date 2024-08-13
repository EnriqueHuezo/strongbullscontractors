/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F0',
          100: '#FFDEDE',
          200: '#FFC3C3',
          300: '#FF9999',
          400: '#FF5E5E',
          500: '#FF2C2C',
          600: '#EF0909',
          700: '#CF0606',
          800: '#AB0909',
          900: '#8D0F0F',
          950: '#4D0202',
        },
        secondary: {
          50: '#F5F8F6',
          100: '#DFE8E3',
          200: '#BED1C7',
          300: '#95B3A3',
          400: '#6F9281',
          500: '#4C6B5C',
          600: '#425F51',
          700: '#384D44',
          800: '#2F4039',
          900: '#2A3731',
          950: '#151E1B',
        },
        terciary: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
          950: '#010101',
        },
      },
      fontFamily: {
        title: ['Crimson Text'],
        text: ['Afacad']
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out infinite',
        fadeInOutSlow: 'fadeInOut 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

