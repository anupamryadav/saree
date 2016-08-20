'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
var minifyHtml = require("gulp-minify-html");
var  minifyCss = require("gulp-minify-css");
var sass = require('gulp-sass');

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

// task
gulp.task('minify-html', function () {
    gulp.src('./**.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('build/'));
});

// task
gulp.task('minify-css', function () {
    gulp.src('css/**/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});


// task
gulp.task('minify-js', function () {
    gulp.src('js/**/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

