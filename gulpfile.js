var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var babel       = require('gulp-babel');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var gulpUtil    = require('gulp-util');


gulp.task('sass', function(){
  return gulp.src('css/sass/**/*.scss')
    .pipe(sass()).on('error', function(err){
        console.log(err)
        this.emit('end');
     })
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
});

gulp.task('start', ['browserSync', 'sass'], function() {
    gulp.watch('css/**/*.scss', ['sass']);
  	gulp.watch(['**/*.html', 'js/**/*{.js,.jsx}'], ['convertJSX', browserSync.reload]);
}); 

gulp.task('convertJSX', function() {
  return gulp.src(['./js/**/*.jsx'])
    .pipe(babel({
      presets : ['es2015']
    }))
    .pipe(gulp.dest('./js/'));
});
