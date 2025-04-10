/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build7a/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(33.85deg, #FDE8E4 37.88%, #ECECEC 73.61%)',
      },
      colors: {
        'black-20': 'rgba(0, 0, 0, 0.2)',
        'black-40': 'rgba(0, 0, 0, 0.4)',
        'black-5': 'rgba(0, 0, 0, 0.05)',
        'icon-white-100': '#FFFFFF',
        'black-10': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

