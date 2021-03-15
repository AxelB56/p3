'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var ejs = require("gulp-ejs")
var browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');
 
function makeCss(){
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
}

function makePage(){
  return gulp.src("./src/pages/*.html")
    .pipe(ejs())
    .pipe(gulp.dest("./www"))
}


function watch(){

  browserSync.init({
      server: "./www"
  });
  gulp.watch('./src/scss/*.scss',makeCss);
  gulp.watch('./src/pages/*.html',makePage);
  gulp.watch("./www").on('change', browserSync.reload);
}


module.exports.makeCss = makeCss;
module.exports.watch = watch;