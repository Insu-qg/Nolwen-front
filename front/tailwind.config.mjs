// tailwind.config.mjs
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#327484',
        secondary: '#ed6b4b',
        beige: '#fac69b',
        darkgray: '#3c3c3b',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
