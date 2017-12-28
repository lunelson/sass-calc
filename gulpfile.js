'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
  return gulp.src('./test/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
});

gulp.task('default', function () {
  return gulp.watch(['./sass/**/*.scss', './test/**/*.scss'], ['test']);
});
