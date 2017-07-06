var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' ).create();
var template = require( 'gulp-template-html' );
var sass = require( 'gulp-sass' );
var ts = require( 'gulp-typescript' );

gulp.task( 'browser-sync' , function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task( 'sass' , function () {
    return gulp.src("src/sass/*.scss")
                .pipe(sass({errLogToConsole: true}).on("error", sass.logError))
                .pipe(gulp.dest("app/public/css"));
});

gulp.task( 'type-script' , function () {
    return gulp.src('src/typescript/*.ts')
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('app/public/js'));
});

gulp.task( 'html-template' , function () {
    return gulp.src( 'src/html/page/*.html' )
            .pipe(template( 'src/html/template/main.html' ))
            .pipe( gulp.dest( 'app' ) );
}); 

gulp.task( 'watch' , [ 'browser-sync' ] , function () {
    gulp.watch( [ 'src/sass/*.scss' ] , ['sass'] );
    gulp.watch( [ 'src/typescript/*.ts' ] , [ 'type-script' ] );
    gulp.watch( [ 'src/html/page/*.html' , 'src/html/template/*.html' ] , [ 'html-template' ] );
    gulp.watch( [  '*.html' , 'app/*.html' , 'app/public/css/*.css' , 'app/public/js/*.js' ] ).on( 'change' , browserSync.reload );
});
