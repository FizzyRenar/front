const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const gulpDebug = require('gulp-debug');
const browserSync = require('browser-sync').create();

const isDev = true;
gulp.task('less', function (){
    return gulp.src("src/less/*.less")
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(autoprefixer())
        .pipe(gulpDebug({title:'autoprefixer'}))
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(cleanCss())
        .pipe(gulpIf(isDev, sourcemaps.write()))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());

});

gulp.task('serve',function (){
    browserSync.init({
        server:{
            baseDir:'./public'

        }
    });
    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['less','serve']);