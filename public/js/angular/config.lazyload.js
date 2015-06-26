// lazyload config

angular.module('app')
    /**
     * jQuery plugin config use ui-jq directive , config the js and css files that required
     * key: function name of the jQuery plugin
     * value: array of the css js file located
     */
    .constant('JQ_CONFIG', {
        easyPieChart: ['js/vendors/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
        sparkline: ['js/vendors/jquery/charts/sparkline/jquery.sparkline.min.js'],
        plot: ['js/vendors/jquery/charts/flot/jquery.flot.min.js',
            'js/vendors/jquery/charts/flot/jquery.flot.resize.js',
            'js/vendors/jquery/charts/flot/jquery.flot.tooltip.min.js',
            'js/vendors/jquery/charts/flot/jquery.flot.spline.js',
            'js/vendors/jquery/charts/flot/jquery.flot.orderBars.js',
            'js/vendors/jquery/charts/flot/jquery.flot.pie.min.js'
        ],
        slimScroll: ['js/vendors/jquery/slimscroll/jquery.slimscroll.min.js'],
        sortable: ['js/vendors/jquery/sortable/jquery.sortable.js'],
        nestable: ['js/vendors/jquery/nestable/jquery.nestable.js',
            'js/vendors/jquery/nestable/nestable.css'
        ],
        filestyle: ['js/vendors/jquery/file/bootstrap-filestyle.min.js'],
        slider: ['js/vendors/jquery/slider/bootstrap-slider.js',
            'js/vendors/jquery/slider/slider.css'
        ],
        chosen: ['js/vendors/jquery/chosen/chosen.jquery.min.js',
            'js/vendors/jquery/chosen/chosen.css'
        ],
        TouchSpin: ['js/vendors/jquery/spinner/jquery.bootstrap-touchspin.min.js',
            'js/vendors/jquery/spinner/jquery.bootstrap-touchspin.css'
        ],
        wysiwyg: ['js/vendors/jquery/wysiwyg/bootstrap-wysiwyg.js',
            'js/vendors/jquery/wysiwyg/jquery.hotkeys.js'
        ],
        vectorMap: ['js/vendors/jquery/jvectormap/jquery-jvectormap.min.js',
            'js/vendors/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
            'js/vendors/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
            'js/vendors/jquery/jvectormap/jquery-jvectormap.css'
        ],
        footable: ['js/vendors/jquery/footable/footable.all.min.js',
            'js/vendors/jquery/footable/footable.core.css'
        ]
    })
    // oclazyload config
    .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: [{
                name: 'ui.select',
                files: [
                    'js/vendors/modules/angular-ui-select/select.min.js',
                    'js/vendors/modules/angular-ui-select/select.min.css'
                ]
            }, {
                name: 'angularFileUpload',
                files: [
                    'js/vendors/modules/angular-file-upload/angular-file-upload.min.js'
                ]
            }, {
                name: 'ngImgCrop',
                files: [
                    'js/vendors/modules/ngImgCrop/ng-img-crop.js',
                    'js/vendors/modules/ngImgCrop/ng-img-crop.css'
                ]
            }, {
                name: 'angularBootstrapNavTree',
                files: [
                    'js/vendors/modules/angular-bootstrap-nav-tree/abn_tree_directive.js',
                    'js/vendors/modules/angular-bootstrap-nav-tree/abn_tree.css'
                ]
            }, {
                name: 'toaster',
                files: [
                    'js/vendors/modules/angularjs-toaster/toaster.js',
                    'js/vendors/modules/angularjs-toaster/toaster.css'
                ]
            }, {
                name: 'textAngular',
                files: [
                    'js/vendors/modules/textAngular/textAngular-sanitize.min.js',
                    'js/vendors/modules/textAngular/textAngular.min.js'
                ]
            }, {
                name: 'vr.directives.slider',
                files: [
                    'js/vendors/modules/angular-slider/angular-slider.min.js',
                    'js/vendors/modules/angular-slider/angular-slider.css'
                ]
            }, {
                name: 'com.2fdevs.videogular',
                files: [
                    'js/vendors/modules/videogular/videogular.min.js'
                ]
            }, {
                name: 'com.2fdevs.videogular.plugins.controls',
                files: [
                    'js/vendors/modules/videogular/plugins/controls.min.js'
                ]
            }, {
                name: 'com.2fdevs.videogular.plugins.buffering',
                files: [
                    'js/vendors/modules/videogular/plugins/buffering.min.js'
                ]
            }, {
                name: 'com.2fdevs.videogular.plugins.overlayplay',
                files: [
                    'js/vendors/modules/videogular/plugins/overlay-play.min.js'
                ]
            }, {
                name: 'com.2fdevs.videogular.plugins.poster',
                files: [
                    'js/vendors/modules/videogular/plugins/poster.min.js'
                ]
            }, {
                name: 'com.2fdevs.videogular.plugins.imaads',
                files: [
                    'js/vendors/modules/videogular/plugins/ima-ads.min.js'
                ]
            }]
        });
    }]);
