var gulp = require('gulp');
var include = require('gulp-file-include');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var serve = require('gulp-serve');


var DEST = './build/';

gulp.task('includes', function() {
    gulp.src('./pages/*.html')
    .pipe(include({
      prefix: '@@',
      basepath: './fragments'
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('static', ['style', 'js', 'docs']);

gulp.task('style', function() {
    var dest = DEST + 'style';
    gulp.src('./style/**/*').pipe(changed(dest)).pipe(gulp.dest(dest));
});

gulp.task('js', function() {
    var dest = DEST + 'js';
    gulp.src('./js/**/*').pipe(changed(dest)).pipe(gulp.dest(dest));
});

gulp.task('docs', function() {
    var dest = DEST + 'docs';
    gulp.src('./docs/**/*').pipe(changed(dest)).pipe(gulp.dest(dest));
});

gulp.task('build', ['static', 'includes']);

gulp.task('serve', serve('build'));

//Watch task
gulp.task('watch',function() {
    gulp.watch('./fragments/*.html', ['includes']);
    gulp.watch('./pages/*.html', ['includes']);
});

//Watch task
gulp.task('default', ['build', 'watch', 'serve']);
