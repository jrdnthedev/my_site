const { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

browserSync.init({
    injectChanges: true,
    server: "./"
});

function compileSass() {
 return src('scss/main.scss')
 .pipe(sass({}))
 .pipe(autoprefixer())
 .pipe(dest('css'))
 .pipe(browserSync.stream())
}

function watchHtml() {
  return src('index.html')
  .pipe(browserSync.stream());
}
  
exports.default = function(){
    //compile and watch
    watch('scss/*.scss',series(compileSass));
    watch('index.html',series(watchHtml));
};