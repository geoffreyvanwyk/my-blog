const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src'));
});

gulp.task('styles', gulp.series('sass', function () {
  const tailwindcss = require('tailwindcss');
  const postcssimport = require('postcss-import');

  return gulp.src('src/styles.css')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        postcssimport(),
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
      ]))
      .pipe(gulp.dest('./css'));
}));
