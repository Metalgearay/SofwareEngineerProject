//gulpfile.js

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    //watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    //livereload = require('gulp-livereload'),
    jasmine = require('gulp-jasmine'),
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

//jasmine tests
gulp.task('test', function(){
    gulp.src('spec/test_spec.js')
        .pipe(jasmine());
});

//default
gulp.task('default', ['lint', 'test', 'nodemon']);
