var gulp = require('gulp')
var sass = require('gulp-sass')
var reactNativeStyle = require('gulp-react-native-stylesheet-css')
var watch = require('gulp-watch')
var eslint = require('gulp-eslint')
var gulpIf = require('gulp-if')

var paths = {
  style: './src/**/**/styles.sass',
  styleDest: './src/',
  styleDestJs: './src/**/**/styles.js',
  src: './src/**/*.js',
  srcDest: './src/',
}

function isFixed(file) {
  return file.eslint != null && file.eslint.fixed
}

gulp.task('style', function() {
  return watch(paths.style, {ignoreInitial: false})
    .pipe(sass())
    .pipe(reactNativeStyle())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulp.dest(paths.styleDest))
})

gulp.task('default', ['style'], function() {
})

gulp.task('lint', function() {
  return watch(paths.src, {ignoreInitial: false})
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest(paths.srcDest)))
})
