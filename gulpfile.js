var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

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
  	gulp.watch(['**/*.html', 'js/**/*.js', 'js/**/*.jsx'], [browserSync.reload]);
}); 