module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        'brand-primary': '#F64E60',
        'brand-background': '#F6FAFC'
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
