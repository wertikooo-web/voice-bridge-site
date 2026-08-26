/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        navy: '#071627',
        ink: '#0b1f34',
        teal: '#3bd6cc',
        amber: '#f4b869',
        mist: '#eaf6fb',
      },
      boxShadow: {
        glow: '0 0 55px rgba(59, 214, 204, 0.28)',
      },
    },
  },
  plugins: [],
};
