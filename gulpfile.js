const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

var dest = 'app/css';


//--- sass ---
gulp.task('sass', function () {
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Minify to CSS with gulp-clean-css
    .pipe(gulp.dest(dest));
});

//--- watch ---
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass'])
  
});


//--- default ---
gulp.task('default', ['sass','watch']);



