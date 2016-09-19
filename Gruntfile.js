module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint')

    grunt.initConfig({
        lesslint: {
            src: ['less/app.less'],
            options: {
                csslint: {
                    csslintrc: '.csslintrc'
                },
                imports: ['less/*.less']
            }
        },

        less: {
            development: {
                files: {
                    'dist/app.css': 'less/app.less'
                }
            }
        }
        
    });

    grunt.registerTask('default', [
        'lesslint',
        'less'
    ]);
};
