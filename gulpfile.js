var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// task para o sass
gulp.task('sass', function(){
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css')); //garante que seja gerado o arquivo na ext css
});


// task para o watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});


// task default para o gulp
gulp.task('default', ['sass','watch']);