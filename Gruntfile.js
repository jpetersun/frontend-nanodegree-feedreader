module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['index.html', 'js/*.js', 'jasmine/**/*.js', 'css/*.css'],
				options: {
					livereload: 9090,
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default');
}