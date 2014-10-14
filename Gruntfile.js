module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		apidoc: {
			lockbox: {
				src: "src/",
				dest: "build/apidoc"
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-apidoc');
	grunt.registerTask('default', ['apidoc']);
};