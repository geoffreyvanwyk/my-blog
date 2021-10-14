let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.setPublicPath('assets');
mix.sass('src/scss/theme.scss', 'assets/').tailwind().sourceMaps();
mix.js('src/js/theme.js', 'assets/').sourceMaps();
mix.browserSync('https://geoffreyvanwyk.test');
