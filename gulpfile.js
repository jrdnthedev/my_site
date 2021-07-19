const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const fs = require("fs");
const mqpacker = require("@hail2u/css-mqpacker");

browserSync.init({
    injectChanges: true,
    server: "./"
});

function compileSass() {
 return src('scss/main.scss')
 .pipe(sass())
 .pipe(autoprefixer())
 .pipe(dest('css'))
 .pipe(browserSync.stream());
}

function css() {
  // return src('css/main.css')
  //   .pipe(postcss([
  //     require("@hail2u/css-mqpacker")()
  //   ]).process(fs.readFileSync("css/main.css", "utf8")).then(function (result) {
  //     console.log(result.css);
  //   }))
  //   .pipe(dest('css'));
  return src('css/main.css')
  .pipe(postcss([mqpacker.pack(fs.readFileSync("css/main.css", "utf8"), {
    from: "css/main.css",
    map: {
      inline: false
    },
    to: "css/main.css"
  }).css]));
}

function watchHtml() {
  return src('index.html')
  .pipe(browserSync.stream());
}
  
exports.default = function(){
    //compile and watch
    watch('scss/*.scss',compileSass);
    watch('css/main.css',css);
    watch('index.html',watchHtml);
};