var gulp = require('gulp');
var { conf } = require('./1989/1989.setting');

if(conf.browserSync.use) {
	var browserSync = require('browser-sync').create();
	gulp.task('browser-sync', function () {
		browserSync.init({
			server: {
				baseDir: './' + conf.browserSync.path + '/' 
			}
		});
	});
}

if(conf.htmlTemplate.use) {
	var template = require('gulp-template-html');
	gulp.task('html-template', function () {
		return gulp.src(conf.htmlTemplate.page)
				.pipe(template(conf.htmlTemplate.template))
				.pipe(gulp.dest(conf.htmlTemplate.release));
	}); 
}

if(conf.sass.use) {
	var sass = require('gulp-sass');
    gulp.task('sass', function () {
        return gulp.src(conf.sass.src)
                    .pipe(sass({errLogToConsole: true}).on("error", sass.logError))
                    .pipe(gulp.dest(conf.sass.release));
    });
}

if(conf.typescript.use) {
	var ts = require('gulp-typescript');
    console.log(conf.typescript);
    gulp.task( 'type-script' , function () {
        return gulp.src(conf.typescript.src)
            .pipe(ts({
                noImplicitAny: true
            }))
            .pipe(gulp.dest(conf.typescript.release));
    });
}

gulp.task('watch', ['browser-sync'], function () {
    if(conf.sass.use) {
		gulp.watch([conf.sass.src], ['sass']);
	}
    if(conf.typescript.use) {
		gulp.watch([conf.typescript.src], ['type-script']);
	}
	if(conf.htmlTemplate.use) {
		gulp.watch([conf.htmlTemplate.page, conf.htmlTemplate.template], ['html-template']);
	}
	if(conf.browserSync.use) {
		gulp.watch([conf.browserSync.path + '/**/*.*', conf.browserSync.path + '/*.*',]).on('change', browserSync.reload );
	}
});
