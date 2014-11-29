// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'public',
        server: 'server',
        release: 'built',
        test: 'test',
        hbs: ['<%= yeoman.app %>/templates/**/*.hbs', '<%= yeoman.app %>/js/common/web/widgets/templates/*.hbs'],
        jsClient: '<%= yeoman.app %>/js/**/*.js',
        jsServer: ['<%= yeoman.server %>/models/**/*.js', '<%= yeoman.server %>/controllers/**/*.js'],
        jade: '<%= yeoman.server %>/views/**/*.jade',
        less: '{.tmp,<%= yeoman.app %>}/less/**/*.less'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,

        clean: {
            release: ['.tmp', '<%= yeoman.release %>/*'],
            dev: '.tmp'
        },
        jsbeautifier: {
            fix: {
                src: [
                    '<%= yeoman.jsServer %>',
                    '<%= yeoman.jsClient %>',
                    '!<%= yeoman.app %>/js/vendors/**/*.js',
                    'test/spec/**/*.js',
                    'lib/**/*.js',
                    'config/**/*.js',
                    '*.js',
                ],
                options: {
                    js: {
                        braceStyle: "collapse",
                        breakChainedMethods: false,
                        e4x: false,
                        evalCode: false,
                        indentChar: " ",
                        indentLevel: 0,
                        indentSize: 4,
                        indentWithTabs: false,
                        jslintHappy: false,
                        keepArrayIndentation: false,
                        keepFunctionIndentation: false,
                        maxPreserveNewlines: 10,
                        preserveNewlines: true,
                        spaceBeforeConditional: true,
                        spaceInParen: false,
                        unescapeStrings: false,
                        wrapLineLength: 0
                    },
                    mode: 'VERIFY_AND_WRITE'
                }
            },
            test: {
                src: [
                    '<%= yeoman.jsServer %>',
                    '<%= yeoman.jsClient %>',
                    '!<%= yeoman.app %>/js/vendors/**/*.js',
                    'test/spec/**/*.js',
                    'lib/**/*.js',
                    'config/**/*.js',
                    '*.js'
                ],
                options: {
                    js: {
                        braceStyle: "collapse",
                        breakChainedMethods: false,
                        e4x: false,
                        evalCode: false,
                        indentChar: " ",
                        indentLevel: 0,
                        indentSize: 4,
                        indentWithTabs: false,
                        jslintHappy: false,
                        keepArrayIndentation: false,
                        keepFunctionIndentation: false,
                        maxPreserveNewlines: 10,
                        preserveNewlines: true,
                        spaceBeforeConditional: true,
                        spaceInParen: false,
                        unescapeStrings: false,
                        wrapLineLength: 0
                    },
                    mode: 'VERIFY_ONLY'
                }
            }
        },
        jshint: {
            server: {
                options: {
                    jshintrc: 'server.jshintrc',
                    reporter: require('jshint-stylish')
                },
                files: {
                    src: [
                        '<%= yeoman.jsServer %>'
                    ]
                }
            },
            client: {
                options: {
                    jshintrc: 'client.jshintrc',
                    reporter: require('jshint-stylish')
                },
                files: {
                    src: [
                        '<%= yeoman.jsClient %>',
                        '!<%= yeoman.app %>/js/vendors/**/*.js'
                    ]
                }
            }
        },
        lesslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            lax: {
                options: {
                    formatters: 'compact'
                },
                src: [
                    '<%= yeoman.less %>'
                ]
            }
        },
        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/less',
                    src: '{,*/}*.less',
                    dest: '.tmp/css'
                }]
            }
        },
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions', 'Firefox > 20', 'ios 7', 'ie 9', 'ie 8']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.release %>/css'
                }]
            }
        },
        imagemin: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,**/}*.{png,jpg,jpeg,gif,ico}',
                    dest: '<%= yeoman.release %>/img'
                }]
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/css',
                dest: '.tmp/css/',
                src: '{,*/}*.css'
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    "<%= yeoman.release %>/index.html": "<%= yeoman.server %>/views/home/home.jade"
                }
            }
        }
    });

    grunt.registerTask('test', [
        'clean:dev',
        'jsbeautifier:test',
        'jshint',
        'lesslint:lax'
    ]);

    grunt.registerTask('fix', [
        'jsbeautifier:fix'
    ]);

    grunt.registerTask('build', [
        'clean:release',
        'imagemin',
        'copy:styles',
        'less',
        'autoprefixer',
        'jade'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};
