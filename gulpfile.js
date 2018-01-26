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
    html    :[ './*.html' ],
    build   :[ '.' ],
    assets  :[ 'assets/' ]
};

// gulp.src(‘*.html’, {cwd: ‘.’})
// SCSS to CSS
// COMPILE JS and CSS
// BROWSER SYNC

gulp.task('minifyjs', function(cb) {
  pump([
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('public/js/')
    ],
    cb
  );
});


// ////////////////////////////////////////////////
//
// Styles / Sass Tasks
//
// // /////////////////////////////////////////////

gulp.task('app',function(){

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
// Build Tasks
// Create build, clean un-neccesary files and folders
//
// // /////////////////////////////////////////////

gulp.task('build:create', function(){
    return gulp.src(config.assets+'**/*')
               .pipe(gulp.dest(''+config.build+''));
});

// gulp.task('build:clean',['build:create'], function(){
//     return del(['build/bower_components/',
//                 'build/scss/',
//                 'build/css/!(*.min.css)',
//                 'build/js/!(*.min.js)'
//               ]);
// });

// gulp.task('build:start', function() {
//     browserSync({
//         server: {
//             baseDir: config.build
//         }
//     });
// });

// gulp.task('build:delete', function(res){
//     return del([config.build+'/**'], res);
// });

//  gulp.task('build', ['build:create', 'build:clean']);



// ////////////////////////////////////////////////
//
// Watch Tasks
// Watch any changes of the css, scripts, and html
//
// // /////////////////////////////////////////////

gulp.task ('watch', function(){

  gulp.watch(config.scss, ['app']);

  gulp.watch(config.html, ['html']);


});



// ////////////////////////////////////////////////
// Gulp Default task
// ///////////////////////////////////////////////
gulp.task('default', ['watch', 'minifyjs', 'browserSync','app','html']);