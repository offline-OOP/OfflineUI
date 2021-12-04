

const tailwindFormsPlugin = require('@tailwindcss/forms');
const tailwindScrollbarHidePlugin = require('tailwind-scrollbar-hide');

module.exports = {
  purge: [
      /*'./src/!**!/!*.vue',
      './src/components/!**!/!*.color.js'*/
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        //'background-default': `url('${require.resolve('./src/assets/images/background-default.png')}')`,
      }
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      openSans: ['Open Sans'],
      lena: ['Lena'],
    },
    colors: {
      accent: 'var(--color-accent)',
      secondary: 'var(--color-secondary)',
      primary: 'var(--color-primary)',
      info: 'var(--color-info)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      transparent: 'transparent',
      gray: 'var(--color-gray)',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'last', 'active', 'disabled'],
      textColor: ['active', 'disabled'],
      display: ['last'],
    },
  },
  plugins: [
    tailwindFormsPlugin,
    tailwindScrollbarHidePlugin,
  ],
};
