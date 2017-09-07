var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var gulp = require('gulp');

gulp.task('autoprefixer', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    var cssnano = require('cssnano');
    var plugins = [
        autoprefixer(),
        cssnano()
    ];
    return gulp.src('css/*.css')
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('useref_en', function () {
    return gulp.src('html_en/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('html_en'))
});

gulp.task('useref_es', function () {
    return gulp.src('html_es/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('html_es'))
});
gulp.task('images', function () {
    return gulp.src('img/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
});
gulp.task('build', ['autoprefixer', 'useref_en', 'useref_es']);