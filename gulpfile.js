const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require('gulp-minify-css')
const gulpFilter = require('gulp-filter')

// 打包scss
gulp.task('sass', async function () {
  return gulp.src('components/style/**/*.scss').pipe(sass()).pipe(minifyCSS()).pipe(gulp.dest('dist/style'))
})

// 打包字体文件
gulp.task('font', async function () {
  return gulp
    .src('components/style/**/iconfont.*')
    .pipe(gulpFilter(['*', '!*.css']))
    .pipe(gulp.dest('dist/style'))
})
