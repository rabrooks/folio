module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },

        sass: {
             dist: {
                files: [{
                expand: true,
                cwd: 'styles/scss',
                src: ['*.scss'],
                dest: 'css',
                ext: '.css'
                }]
             }
        },

        connect: {
            server: {
              options: {
                port: 9000,
                hostname: 'localhost',
                base: '.'
              }
            }
         },

        watch: {
            css: {
                files: 'styles/scss/*.scss',
                tasks: ['sass'],
                options: {
                livereload: false,
                }
            }
        }
           
    });


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default',['jshint', 'sass']);
grunt.registerTask('watch', ['watch']);


};
