var gulp = require('gulp');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
 
gulp.task('css', function() {
    livereload();
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('css/*.css', ['css']);
});
