//gulpfile.js

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    //watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    //livereload = require('gulp-livereload'),
    paths = ['./*.js', 'app/*.js', 'app/**/*.js', 'public/js/*.js'];

//nodemon
gulp.task('nodemon', function() {
    nodemon({
        script: './app.js',
        env: {
            'NODE_EVN': 'development'
        }
    })
        .on('restart');
});

//jshint
gulp.task('lint', function(){
    gulp.src(paths)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});

//default
gulp.task('default', ['lint', 'nodemon']);
