const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

var config = {
    paths: {
        less: './src/less/**/*.less',
        html: './public/index.html'
    },
    output: {
        ccsName: 'bundle.min.css',
        path: './public'
    }
};

gulp.task('less', function (){
    return gulp.src(config.paths.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(config.output.ccsName))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('serve',function (){
    browserSync.init({
        server:{
            baseDir: config.output.path

        }
    });
    gulp.watch(config.paths.less, ['less']);
    gulp.watch(config.paths.html).on('change', browserSync.reload);
});

gulp.task('default', ['less','serve']);