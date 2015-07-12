var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('js', function () {
  return browserify('./js/app.js')
  // es6 support
  .transform(babelify, {stage: 0})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('mocha', function() {
  return gulp.src('test/tests.js')
  .pipe(mocha({reporter: 'nyan'}))
  .once('error', function () {
    process.exit(1);
  })
  .once('end', function () {
    process.exit();
  });
});

gulp.task('watch', function () {
  gulp.watch('js/**/*.js',['js','mocha']);
})
