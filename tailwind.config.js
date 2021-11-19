module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat'],
      openSans: ['Open Sans'],
      lena: ['Montserrat']
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
      gray: 'var(--color-gray)'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'last', 'active', 'disabled'],
      textColor: ['active', 'disabled'],
      display: ['last']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}
