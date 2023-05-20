var elixir = require('laravel-vite-plugin')
const { mixin } = require('lodash')


elixir(function (mix){
  mix.sass('app.scss')
  
  mix.scripts([
    'app.js'
  ], 'public/js/app.js')
})


// const gulp = require('gulp');
// const sass = require('gulp-sass');

// gulp.task('sass', function () {
//     return gulp.src('resources/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('public/css'));
// });

// gulp.task('watch', function () {
//     gulp.watch('resources/sass/**/*.scss', gulp.series('sass'));
// });

// gulp.task('default', gulp.series('sass', 'watch'));