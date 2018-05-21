
var gulp = require('gulp');
var sass = require('gulp-sass');

 
 
gulp.task('sass', function(){
  return gulp.src("sass/*.scss")
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('css/'))
    
  });
 
 
 
//  gulp.task('watch',['which','tasks', 'to', 'run', 'once', 'watched', 'element', 'triggers'], function(){
// //riggers for the watch
//   })
  gulp.task('watch',  ['sass' ], function(){
    gulp.watch('sass/**/*.scss', ['sass']); 

 
  });
  // gulp.task('default', ['sass', 'serve']);