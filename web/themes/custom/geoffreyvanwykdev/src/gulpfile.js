var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src'));
});

gulp.task('styles', gulp.series('sass', function () {
  var tailwindcss = require('tailwindcss');
  var postcssimport = require('postcss-import');

  return gulp.src('src/styles.css')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        postcssimport(),
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
      ]))
      .pipe(purgecss({
        mode: 'layers',
        content: [
          'templates/**/*.twig',
          '../../../../config/**/*.yml',
          'hashbangcode_theme2.theme',
          'src/sass/**/*.scss'
        ],
        defaultExtractor: content =>
            content.match(/[\w-/:]+(?<!:)/g) || []
      }))
      .pipe(gulp.dest('./css'));
}));
