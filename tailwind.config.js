/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
   

    extend: {
      
        screens: {
          mn: '376px',
          sm: '642px',
          md: '770px' ,
          lg: '1026px' ,
          xl: '1282px' ,
          '2xl': '1537px' ,
          
         
      },
      colors: {
        'focusBorder': '#4525d2'
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