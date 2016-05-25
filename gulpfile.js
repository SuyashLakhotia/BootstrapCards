// Include Gulp
var gulp = require('gulp');

// Include Plugins
var browserSync = require('browser-sync').create();
var bootlint = require('gulp-bootlint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');


// Init BrowserSync
gulp.task('browserSync', function() {
	browserSync.init({
    	server: {
      		baseDir: 'dist'
    	},
  	});
});

// Lint Bootstrap
gulp.task('bootlint', function() {
    return gulp.src('src/*.html')
        .pipe(bootlint());
});

// Compile Sass
gulp.task('sass', function() {
  	return gulp.src('src/sass/main.scss')
  		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    	.pipe(rename('cards.css'))
    	.pipe(gulp.dest('dist/css'))
    	.pipe(browserSync.reload({
      		stream: true
    	}));
});

// Lint JS
gulp.task('lint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Copy JS
gulp.task('copyJS', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

// Copy HTML
gulp.task('copyHTML', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Copy Images
gulp.task('copyImg', function () {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'));
});

// Copy Fonts
gulp.task('copyFonts', function () {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

// Watch Files For Changes
gulp.task('watch', ['browserSync', 'bootlint', 'sass', 'lint', 'copyJS', 'copyHTML', 'copyImg', 'copyFonts'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['lint', 'copyJS']);
    gulp.watch('src/*.html', ['bootlint', 'copyHTML']);
    gulp.watch('src/img/*.*', ['copyImg']);
    gulp.watch('src/fonts/*.*', ['copyFonts']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('src/img', browserSync.reload);
    gulp.watch('src/fonts', browserSync.reload);
});

// Default Task
gulp.task('default', ['watch']);