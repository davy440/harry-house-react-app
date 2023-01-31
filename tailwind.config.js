/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./src/**/*.{html,js}"]
  },
  theme: {
    fontFamily: {
      title: ['Philosopher', 'serif'],
      body: ['Mulish', 'sans-serif']
    },
    extend: {
      colors: {
        'yellow': {
          100: '#f4ba37',
          200: '#efb135',
          300: '#e8932e',
          400: '#e89c15'
        },
        'red': '#571b2a',
        'grey': '#ccc'
      },
      dropShadow: {
        '2l': '1px 1px 0 rgba(0,0,0,0.65)',
        '3l': '0 0 10px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}
