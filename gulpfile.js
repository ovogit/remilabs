var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var babelify = require('babelify');

gulp.task('js', function () {
  return browserify('./js/app.js')
  // es6 support
  .transform(babelify, {stage: 0})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('build', function () {
   gulp.src('js/bundle.js')
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
   gulp.src('index.html')
  .pipe(gulp.dest('build/'));
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
  gulp.watch('js/app.js',['js']);
  gulp.watch('js/components/**/*.js',['js']);
})
