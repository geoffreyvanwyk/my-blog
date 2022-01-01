const heroPatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  content: [
    "./templates/**/*.twig"
  ],
  theme: {
    heroPatterns: {
      circuitboard: heroPatterns.circuitboard
    },
    heroPatternsShades: ['400'],
    heroPatternsColors: ['gray'],
    extend: {},
  },
  plugins: [
      require('tailwindcss-hero-patterns'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
  ],
  prefix: 'tw-'
}
