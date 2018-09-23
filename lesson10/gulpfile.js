var gulp = require('gulp');

gulp.task('hello', function() {
   console.log('Hello, word')
});

gulp.task('log', function() {
    console.log('Hello, word again')
});

gulp.task('default', ['hello','log']);