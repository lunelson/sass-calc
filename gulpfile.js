'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var diff = require('gulp-diff');
var rename = require('gulp-rename');

gulp.task('test', function () {
  return gulp.src('./test/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename({extname: '.css'}))
    .pipe(diff())
    .pipe(diff.reporter({ fail: true }));
});

gulp.task('default', function () {
  return gulp.watch('./test/**/*.scss', ['test']);
});
