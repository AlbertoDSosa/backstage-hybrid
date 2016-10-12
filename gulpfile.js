'use strict'

const gulp = require('gulp'),
			pug = require('gulp-pug')

// Desktop Build

const desktopConfig = require('./desktop/config')

gulp.task('build:desktop', function() {
 
  gulp.src(desktopConfig.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(desktopConfig.dest))

  gulp.src(desktopConfig.copy.src)
  	.pipe(gulp.dest(desktopConfig.copy.dest))
})

gulp.task('desktop-dev', ['build:desktop'])