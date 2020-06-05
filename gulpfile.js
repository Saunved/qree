const gulp = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

function browserBuild(){
    return gulp.src('src/index.js')
    .pipe(minify({noSource: true}))
    .pipe(rename('qree.min.js'))
    .pipe(gulp.dest('dist'))
}

exports.default = gulp.series(browserBuild);