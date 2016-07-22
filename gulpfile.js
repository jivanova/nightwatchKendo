var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');
 
gulp.task('default', function() {
  return gulp.src('tests')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});