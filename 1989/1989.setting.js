const {config} = require('./1989.config');

var configForRun = {
	browserSync: {
		path: config.release.path,
		use: config.browserSync.use
	},
	htmlTemplate: {
        use: config.src.html.use,
		template: config.src.path + '/' + config.src.html.src + '/template/' + config.src.html.template,
		page: config.src.path + '/' + config.src.html.src + '/' + config.src.html.page + '/*.html',
		release: config.release.path
	},
    sass: {
		use: config.src.sass.use,
        src: config.src.path + '/' + config.src.sass.src + '/*.scss',
		release: config.release.path + '/' + config.release.assets + '/' + config.src.sass.release
	},
    typescript: {
		use: config.src.typescript.use,
        src: config.src.path + '/' + config.src.typescript.src + '/*.ts',
		release: config.release.path + '/' + config.release.assets + '/' + config.src.typescript.release
	},
	cmd: {
		browserSync: config.prefix + '_browser-sync',
		htmlTemplate: config.prefix + '_gulp-template-html',
		sass: config.prefix + '_sass',
		typescript: config.prefix + '_typescript',
	}
}

exports.conf = configForRun;