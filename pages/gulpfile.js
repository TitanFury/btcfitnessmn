var fileinclude = require('gulp-file-include'),
      gulp = require('gulp');
    
      gulp.task('fileinclude', function(done) {
        gulp.src(['*.html'])
          .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
          }))
          .pipe(gulp.dest('../docs'))
          done();
      });