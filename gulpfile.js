const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss');
var rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

// tsks 

//////////////////////////
////     scss task 
//////////////////////////
gulp.task('scss', function () {
    return gulp.src('./src/assets/sass/styles.scss')
        .pipe(sass())

        .pipe(postcss([autoprefixer({
            browsers: ['last 4 version']
        })]))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/'))
})

//////////////////////////
////     Watch task 
//////////////////////////
gulp.task('watch', function () {
    gulp.watch('./src/assets/sass/*.scss', gulp.series('scss'))
})

//////////////////////////
////     Run task 
//////////////////////////
gulp.task('default', gulp.series('watch'));