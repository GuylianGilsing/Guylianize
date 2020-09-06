let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./src/scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename('guylianize.min.css'))
            .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series(['sass']));
});