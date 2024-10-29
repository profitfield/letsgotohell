/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tg: {
          bg: '#ffffff',
          secondary: '#f4f4f5',
          text: '#000000',
          hint: '#999999',
          link: '#2481cc',
          button: '#007aff',
          destructive: '#ff3b30',
        },
      },
      maxHeight: {
        modal: '90vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};