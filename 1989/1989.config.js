exports.config = {
	release: {
		path: 'dist',
		assets: 'public'
	},
	src: {
		path: 'src',
		html: {
			use: true,
			src: 'html',
			page: 'page',
			template: 'main.html'
		},
		sass: {
			use: false,
			src: 'sass',
			release: 'css'
		},
		typescript: {
			use:  true,
			src: 'ts',
			release: 'js'
		}
	},
	browserSync: {
		use: true
	}
}