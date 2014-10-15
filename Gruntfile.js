module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		apidoc: {
			lockbox: {
				src: "src/",
				dest: "build/apidoc"
			}
		},
		watch: {
			apidoc: {
				files: ['src/*'], // which files to watch
				tasks: ['apidoc'],
				options: {
					nospawn: true
				}
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-apidoc');
	grunt.registerTask('default', ['apidoc']);
};