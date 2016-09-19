module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint')

    grunt.initConfig({
        lesslint: {
            src: 'less/*.less',
            options: {
                csslint: {
                    csslintrc: '.csslintrc'
                }
            }
        },

        less: {
            files: {
                'dist/app.css': 'less/app.less'
            }
        }
        
    });

    grunt.registerTask('less2css', [
        'lesslint',
        'less'
    ]);

    grunt.registerTask('default', [
        'less2css'
    ]);
};
