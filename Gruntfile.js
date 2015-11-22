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
            release: ['.tmp', '<%= yeoman.release %>'],
            dev: ['.tmp']
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
        less: {
            dist: {
                files: {
                    '.tmp/css/base.css': '<%= yeoman.app %>/less/frontend/base.less',
                    '.tmp/css/style-blue.css': '<%= yeoman.app %>/less/theme/style-blue.less',
                    '.tmp/css/style-black.css': '<%= yeoman.app %>/less/theme/style-black.less',
                    '.tmp/css/style-cyan.css': '<%= yeoman.app %>/less/theme/style-cyan.less',
                    '.tmp/css/style-green.css': '<%= yeoman.app %>/less/theme/style-green.less',
                    '.tmp/css/style-orange.css': '<%= yeoman.app %>/less/theme/style-orange.less',
                    '.tmp/css/style-pink.css': '<%= yeoman.app %>/less/theme/style-pink.less',
                    '.tmp/css/style-purple.css': '<%= yeoman.app %>/less/theme/style-purple.less',
                    '.tmp/css/style-red.css': '<%= yeoman.app %>/less/theme/style-red.less',
                    '.tmp/css/style-yellow.css': '<%= yeoman.app %>/less/theme/style-yellow.less',
                    '.tmp/css/angular/app.css': '<%= yeoman.app %>/less/app/app.less'
                }
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
                    src: '{,**/}*.css',
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
                src: '{,**/}*.css'
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/rs-plugin',
                    dest: '<%= yeoman.release %>/rs-plugin',
                    src: '{,**/}*.*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/showbizpro',
                    dest: '<%= yeoman.release %>/showbizpro',
                    src: '{,**/}*.*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/data',
                    dest: '<%= yeoman.release %>/data',
                    src: '{,**/}*.*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/css/fonts',
                    dest: '<%= yeoman.release %>/css/fonts',
                    src: '{,**/}*.*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.release %>/css',
                    dest: '<%= yeoman.app %>/css',
                    src: '{,**/}*.*'
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/js',
                    dest: '<%= yeoman.release %>/js',
                    src: '{,**/}*.*'
                }]
            },
            dev: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.release %>/css',
                dest: '<%= yeoman.app %>/css',
                src: '{,**/}*.*'
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
                    "<%= yeoman.release %>/index.html": "<%= yeoman.server %>/views/home/home.jade",
                    "<%= yeoman.release %>/shop.html": "<%= yeoman.server %>/views/shop/shop.jade",
                    "<%= yeoman.release %>/shop-detail.html": "<%= yeoman.server %>/views/shop/shop-detail.jade",
                    "<%= yeoman.release %>/shop-checkout.html": "<%= yeoman.server %>/views/shop/shop-checkout.jade",
                    "<%= yeoman.release %>/ui-alerts.html": "<%= yeoman.server %>/views/ui/ui-alerts.jade",
                    "<%= yeoman.release %>/ui-badges-labels.html": "<%= yeoman.server %>/views/ui/ui-badges-labels.jade",
                    "<%= yeoman.release %>/ui-blockquotes.html": "<%= yeoman.server %>/views/ui/ui-blockquotes.jade",
                    "<%= yeoman.release %>/ui-breadcrumbs.html": "<%= yeoman.server %>/views/ui/ui-breadcrumbs.jade",
                    "<%= yeoman.release %>/ui-modals.html": "<%= yeoman.server %>/views/ui/ui-modals.jade",
                    "<%= yeoman.release %>/ui-navbars.html": "<%= yeoman.server %>/views/ui/ui-navbars.jade",
                    "<%= yeoman.release %>/ui-pagination.html": "<%= yeoman.server %>/views/ui/ui-pagination.jade",
                    "<%= yeoman.release %>/ui-panels.html": "<%= yeoman.server %>/views/ui/ui-panels.jade",
                    "<%= yeoman.release %>/ui-progress-bars.html": "<%= yeoman.server %>/views/ui/ui-progress-bars.jade",
                    "<%= yeoman.release %>/ui-tabs-accordions.html": "<%= yeoman.server %>/views/ui/ui-tabs-accordions.jade",
                    "<%= yeoman.release %>/ui-typography.html": "<%= yeoman.server %>/views/ui/ui-typography.jade",
                    "<%= yeoman.release %>/ui-buttons.html": "<%= yeoman.server %>/views/ui/ui-buttons.jade",
                    "<%= yeoman.release %>/404-page.html": "<%= yeoman.server %>/views/404.jade",
                }
            }
        },
        uglify: {
            release: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/js',
                    src: '{,**/}*.js',
                    dest: '<%= yeoman.release %>/js'
                }]
            }
        },
        concurrent: {
            test: {
                tasks: ['jsbeautifier:test', 'jshint', 'clean:dev'],
                options: {
                    logConcurrentOutput: true
                }
            },
            build: {
                tasks: ['imagemin', 'jade', 'less2css'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            css: {
                files: [
                    '<%= yeoman.app %>/less/**/*.less'
                ],
                tasks: [
                    'less',
                    'autoprefixer',
                    'copy:dev'
                ]
            }
        }
    });

    grunt.registerTask('test', [
        'concurrent:test'
    ]);

    grunt.registerTask('less2css', [
        'copy:styles',
        'less',
        'autoprefixer',
        'copy:dist'
    ]);

    grunt.registerTask('fix', [
        'jsbeautifier:fix'
    ]);

    grunt.registerTask('build', [
        'clean:release',
        'concurrent:build',
    ]);

    grunt.registerTask('dev', [
        'clean:dev',
        'watch'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
};
