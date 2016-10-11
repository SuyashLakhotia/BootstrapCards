// Include Gulp
var gulp = require('gulp');

// Include Plugins
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var bootlint = require('gulp-bootlint');


// Init BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({ server: { baseDir: 'dist' } });
});

// Copy Fonts
gulp.task('copyFonts', function () {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

// Copy Images
gulp.task('copyImg', function () {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'));
});

// Lint JS
gulp.task('lintJS', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Copy JS
gulp.task('copyJS', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(rename('cards.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

// Lint Bootstrap
gulp.task('lintBootstrap', function() {
    return gulp.src('src/*.html')
        .pipe(bootlint());
});

// Copy HTML
gulp.task('copyHTML', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', ['browserSync', 'copyFonts', 'copyImg', 'lintJS', 'copyJS', 'sass', 'lintBootstrap', 'copyHTML'], function() {
    gulp.watch('src/fonts/*.*', ['copyFonts', browserSync.reload]);
    gulp.watch('src/img/*.*', ['copyImg', browserSync.reload]);
    gulp.watch('src/js/**/*.js', ['lintJS', 'copyJS', browserSync.reload]);
    gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('src/*.html', ['lintBootstrap', 'copyHTML', browserSync.reload]);
});

// Default Task
gulp.task('default', ['watch']);
