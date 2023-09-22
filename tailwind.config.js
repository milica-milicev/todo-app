/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Poppins',
    },
    container: {
      screens: {
        sm: '460px',
        md: '600px',
        lg: '768px',
        xl: '991px',
        '2xl': '1240px',
      },
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
};
