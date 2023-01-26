/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'focusBorder': '#3419e8'
      },

      fontFamily: {
        chopsic: ['Chopsic'],
        sfera: ['Sfera'],
      }
    },
  },
  plugins: [  
    require('daisyui', 'flowbite/plugin')
  ],
}