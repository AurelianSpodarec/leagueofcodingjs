// ////////////////////////////////////////////////
//
// Included taskes
//
// // /////////////////////////////////////////////

var gulp            = require('gulp'),
    minifycss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    autoprefixer    = require('gulp-autoprefixer'),
    plumber         = require('gulp-plumber'),
    del             = require('del'),
    rename          = require('gulp-rename'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump');



// ////////////////////////////////////////////////
//
// Configuration variables
// Set paths
//
// // /////////////////////////////////////////////

var config = {
    scss    :[ 'assets/scss/**/*.scss' ],
    css     :[ 'public/css/' ],
    js      :[ 'assets/js/*.js' ],
    html    :[ './*.html' ],
    assets  :[ 'assets/' ]
};

gulp.task('minifyjs', function(cb) {
  pump([
        gulp.src(config.js),
        sourcemaps.init(),
        concat('app.js'),
        
        rename({suffix: '.min'}),
        sourcemaps.write(),
        uglify(),
        gulp.dest('public/js/'),
        reload({stream:true})
    ],
    cb
  );
});



// ////////////////////////////////////////////////
//
// Styles / Sass Tasks
//
// // /////////////////////////////////////////////

gulp.task('app',function() {

    return gulp.src(config.scss)
        .pipe(sourcemaps.init())
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(''+config.css+''))
        .pipe(reload({stream:true}));
});



// ////////////////////////////////////////////////
//
// HTML Tasks
//
// // /////////////////////////////////////////////

gulp.task('html', function(){
    return gulp.src('*.html', {cwd: '.'})
               .pipe(reload({stream:true}));
});



// ////////////////////////////////////////////////
//
// Browser-Sync Tasks
//
// // /////////////////////////////////////////////

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
    });
});



// ////////////////////////////////////////////////
//
// Watch Tasks
// Watch any changes of the css, scripts, and html
//
// // /////////////////////////////////////////////

gulp.task ('watch', function(){

  gulp.watch(config.scss, ['app']);

  gulp.watch(config.js, ['minifyjs']);

  gulp.watch(config.html, ['html']);


});



// ////////////////////////////////////////////////
// Gulp Default task
// ///////////////////////////////////////////////
gulp.task('default', ['watch', 'minifyjs', 'browserSync','app','html']);