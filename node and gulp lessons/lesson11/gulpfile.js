const gulp = require('gulp');

gulp.task('default', function (){
    return gulp.src(["src/**/*.js", "src/**/*.css"], {read: false})
        //.on('data', function (file) {
        //    console.log(file);
        //})
        .pipe(gulp.dest('tmp'))
        //.pipe(gulp.dest(function(file){
        //    return 'dest';
        //}));
});