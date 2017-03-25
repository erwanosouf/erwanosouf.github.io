var gulp = require('gulp');
var include = require('gulp-file-include');
var gutil = require('gulp-util');


var DEST = './build/';

gulp.task('includes', function() {
    gulp.src('./pages/*.html')
    .pipe(include({
      prefix: '@@',
      basepath: './fragments'
    }))
    .pipe(gulp.dest(DEST));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./fragments/*.html', ['includes']);
    gulp.watch('./pages/*.html', ['includes']);
});
