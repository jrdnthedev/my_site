const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const combineMediaQuery = require('postcss-combine-media-query');

browserSync.init({
    injectChanges: true,
    server: "./"
});

function compileSass() {
 return src('scss/main.scss')
 .pipe(sass())
 .pipe(postcss([
  combineMediaQuery()
  ]))
 .pipe(autoprefixer())
 .pipe(dest('css'))
 .pipe(browserSync.stream());
}

function css() {
  return src('css/main.css')
  .pipe(postcss([
    combineMediaQuery()
    ]))
  .pipe(dest('css'))
}

function watchHtml() {
  return src('index.html')
  .pipe(browserSync.stream());
}
  
exports.default = function(){
    //compile and watch
    watch('scss/*.scss',compileSass);
    // watch('css/main.css',css);
    watch('index.html',watchHtml);
};