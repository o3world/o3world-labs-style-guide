var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var paths = {
    styles: ['./src/styles/scss/style.scss', './src/styles/scss/ie.scss']
}

gulp.task('css', function () { 
    gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(sass())
        .pipe(minifycss())
        .pipe(autoprefixer({ 
            browsers: ['last 3 versions', 'Safari 8'] 
        }))
        .pipe(gulp.dest('src/styles'))
        .pipe(notify({message: 'SCSS Compiled!'}));
});

gulp.task('js-plugins', function () {
    gulp.src('./src/js/vendor/plugins/*.js')
        .pipe(plumber())
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js/vendor'))
        .pipe(notify({message: 'Plugins Compiled and Minified!'}));
});

gulp.task('js', function () {
    gulp.src('./js/functionality.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
        .pipe(notify({message: 'JS Compiled!'}));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/scss/*.scss', ['css']);
    gulp.watch('./src/styles/scss/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.js', ['js-plugins']);
    gulp.watch('./src/js/functionality.js', ['js']);
});

gulp.task('default', ['watch']);

