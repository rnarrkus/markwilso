// Dependencies
var gulp = require('gulp'),
    log = require('gulp-util').log,
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    image = require('gulp-image'),
    plumber = require('gulp-plumber'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps'),
    opn = require('opn');

// Config
var config = {
  watch: './src/**/*.*',
  server: {
    host: 'localhost',
    port: '4000',
    path: '/dist'
  },
  html: {
    src: './src/jade/index.jade',
    destination: 'dist/'
  },
  css: {
    src: './src/styl/app.styl',
    destination: 'dist/css'
  },
  js: {
    src: './src/js/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/*',
    destination: 'dist/img'
  }
};

// Webserver Config
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: config.server.host,
      port: config.server.port,
      livereload: true,
      directoryListing: false
    }));
});

// Open Browser to http://localhost:3000
gulp.task('openbrowser', function() {
  opn('http://'+ config.server.host +':'+ config.server.port + config.server.path);
});

// Jade w/ option to rename file
gulp.task('jade', function() {
  var locs = {};
  return gulp.src(config.html.src)
    .pipe(plumber())
    .pipe(jade({ 
      pretty: false,
      locals: locs 
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(config.html.destination));
});

// Stylus w/ option to rename file
gulp.task('stylus', function() {
  return gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(config.css.destination));
});

// Javascript
gulp.task('js', function() {
  return gulp.src(config.js.src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.js.destination));
});

// Images
gulp.task('img', function() {
  return gulp.src(config.img.src)
    .pipe(plumber())
    .pipe(newer(config.img.destination))
    .pipe(image())
    .pipe(gulp.dest(config.img.destination));
});

// Watch files
gulp.task('watch', function() {
  log('Watching files');
  gulp.watch(config.watch, ['build']);
});

// Command line tasks
gulp.task('build', ['jade', 'stylus', 'img', 'js']);
gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);
gulp.task('w', ['build', 'watch']);
