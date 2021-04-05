module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    heroPatterns: {
      circuitboard: patterns.circuitboard
    },
    heroPatternsShades: ["400"],
    heroPatternsColors: ["gray"],
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
