/*globals module */
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		concat: {
			build: {
				src: ['partials/*.less'],
				dest: 'mixins.less'
			}
		},

		less: {
			development: {
				files: {
					'tests/css/main.css': 'tests/less/main.less'
				}
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task
	grunt.registerTask('default', ['concat', 'less']);

};
