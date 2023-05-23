const { src, dest } = require('gulp')
const ttf2woff2 = require('gulp-ttf2woff2')
const ttfToWoff = require('gulp-ttf2woff')

function fonts() {
  return src('src/vendor/fonts/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('src/vendor/fonts/'))
    .pipe(src('src/vendor/fonts/*.ttf'))
    .pipe(ttfToWoff())
    .pipe(dest('src/vendor/fonts/'))
}

exports.fonts = fonts
