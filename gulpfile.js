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
 return src('scss/styles.scss')
 .pipe(sass())
 .pipe(postcss([
  combineMediaQuery()
  ]))
 .pipe(autoprefixer())
 .pipe(dest('css'))
 .pipe(browserSync.stream());
}

function watchHtml() {
  return src('index.html')
  .pipe(browserSync.stream());
}
  
exports.default = function(){
    //compile and watch
    watch('scss/*.scss',compileSass);
    watch('index.html',watchHtml);
};