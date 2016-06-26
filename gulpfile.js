'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('default',function()
{
gulp.src('js/myjs/*.js')
 .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('Scripts',function()
{
gulp.src('js/myjs/*.js')
 .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
 
gulp.task('css', function () {
  gulp.src('css/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('build/styles/'));
});

gulp.task('Concating', [], function() {
  console.log("Concating and moving all the css files in styles folder");
  gulp.src("css/**.css")
      .pipe(concat('main.css'))
      .pipe(gulp.dest('build/styles'));
});

gulp.task('Concatjs', [], function() {
  console.log("Concating and moving all the css files in styles folder");
  gulp.src("js/myjs/**.js")
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'));
});