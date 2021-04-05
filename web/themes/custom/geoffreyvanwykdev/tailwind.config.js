const heroPatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    heroPatterns: {
      circuitboard: heroPatterns.circuitboard
    },
    heroPatternsShades: ['400'],
    heroPatternsColors: ['gray'],
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('tailwindcss-hero-patterns'),
  ],
  prefix: 'tw-'
}
