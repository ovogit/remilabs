var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var order = require('gulp-order');

// For windows users setup a growl notifier
//var growlNotifier = growl();
var assets = {
  js: './assets/js/',
  css: './assets/css/'
}
var css = [
  assets.css+'bootstrap.css'
];
var js = [
  assets.js+'jquery.js',
  assets.js+'underscore.js',
  assets.js+'backbone.js',
  assets.js+'vue.js',
  assets.js+'bootstrap.js',
  assets.js+'**/*.js'
];
gulp.task('less', function () {
  gulp.src('assets/less/*.less').pipe(less()).pipe(gulp.dest('css'));
});
gulp.task('css',function(){
  gulp.src('assets/css/**/*.css').pipe(gulp.dest('css'));
});
gulp.task('js', function () {
  return gulp.src(js).pipe(concat('all.js')).pipe(gulp.dest('js'));
});

gulp.task('watch',function(){
  gulp.watch('assets/less/**/*.less', ['less']);
  gulp.watch('assets/css/**/*.css', ['css']);
  gulp.watch('assets/**/*.js', ['js']);
});
