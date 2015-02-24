var userRoles = require('../../public/js/routingConfig').userRoles;

exports.notfound = function(req, res) {
    res.render('404', {
        title: '网页无法访问'
    });
};

/**
 * GET /admin
 * Admin page.
 */

exports.admin = function(req, res) {
    var role = userRoles.public, username = '';
    if(req.user) {
        role = req.user.role;
        username = req.user.username;
    }
    res.cookie('user', JSON.stringify({
        'username': username,
        'role': role
    }));
    res.render('admin', {
        title: '后台管理'
    });
};

/**
 * GET /
 * Home page.
 */

exports.home = function(req, res) {
    res.render('home/home', {
        title: '首页'
    });
};

/**
 * GET /home-2-1
 * Home page.
 */

exports.home_2_1 = function(req, res) {
    res.render('home/home-2-1', {
        title: '首页'
    });
};

/**
 * GET /home-3-1
 * Home page.
 */

exports.home_3_1 = function(req, res) {
    res.render('home/home-3-1', {
        title: '首页'
    });
};

/**
 * GET /home-4-1
 * Home page.
 */

exports.home_4_1 = function(req, res) {
    res.render('home/home-4-1', {
        title: '首页'
    });
};

/**
 * GET /home-5-1
 * Home page.
 */

exports.home_5_1 = function(req, res) {
    res.render('home/home-5-1', {
        title: '首页'
    });
};

/**
 * GET /home-2-2
 * Home page.
 */

exports.home_2_2 = function(req, res) {
    res.render('home/home-2-2', {
        title: '首页'
    });
};

/**
 * GET /home-3-2
 * Home page.
 */

exports.home_3_2 = function(req, res) {
    res.render('home/home-3-2', {
        title: '首页'
    });
};

/**
 * GET /home-4-2
 * Home page.
 */

exports.home_4_2 = function(req, res) {
    res.render('home/home-4-2', {
        title: '首页'
    });
};

/**
 * GET /home-5-2
 * Home page.
 */

exports.home_5_2 = function(req, res) {
    res.render('home/home-5-2', {
        title: '首页'
    });
};

/**
 * GET /module-advert-1
 * Module advert page.
 */

exports.module_advert_1 = function(req, res) {
    res.render('module/module-advert-1', {
        title: '模块-广告'
    });
};

/**
 * GET /module-advert-2
 * Module advert page.
 */

exports.module_advert_2 = function(req, res) {
    res.render('module/module-advert-2', {
        title: '模块-广告'
    });
};

/**
 * GET /module-advert-3
 * Module advert page.
 */

exports.module_advert_3 = function(req, res) {
    res.render('module/module-advert-3', {
        title: '模块-广告'
    });
};

/**
 * GET /module-advert-4
 * Module advert page.
 */

exports.module_advert_4 = function(req, res) {
    res.render('module/module-advert-4', {
        title: '模块-广告'
    });
};

/**
 * GET /module-advert-5
 * Module advert page.
 */

exports.module_advert_5 = function(req, res) {
    res.render('module/module-advert-5', {
        title: '模块-广告'
    });
};

/**
 * GET /module-advert-6
 * Module advert page.
 */

exports.module_advert_6 = function(req, res) {
    res.render('module/module-advert-6', {
        title: '模块-广告'
    });
};

/**
 * GET /module-slider-1
 * Module slider page.
 */

exports.module_slider_1 = function(req, res) {
    res.render('module/module-slider-1', {
        title: '模块-slider'
    });
};

/**
 * GET /module-slider-2
 * Module slider page.
 */

exports.module_slider_2 = function(req, res) {
    res.render('module/module-slider-2', {
        title: '模块-slider'
    });
};

/**
 * GET /module-slider-3
 * Module slider page.
 */

exports.module_slider_3 = function(req, res) {
    res.render('module/module-slider-3', {
        title: '模块-slider'
    });
};

/**
 * GET /module-slider-4
 * Module slider page.
 */

exports.module_slider_4 = function(req, res) {
    res.render('module/module-slider-4', {
        title: '模块-slider'
    });
};

/**
 * GET /module-mixitup-1
 * Module mixitup page.
 */

exports.module_mixitup_1 = function(req, res) {
    res.render('module/module-mixitup-1', {
        title: '模块-mixitup'
    });
};

/**
 * GET /module-mixitup-2
 * Module mixitup page.
 */

exports.module_mixitup_2 = function(req, res) {
    res.render('module/module-mixitup-2', {
        title: '模块-mixitup'
    });
};

/**
 * GET /module-service-1
 * Module service page.
 */

exports.module_service_1 = function(req, res) {
    res.render('module/module-service-1', {
        title: '模块-service'
    });
};

/**
 * GET /module-service-2
 * Module service page.
 */

exports.module_service_2 = function(req, res) {
    res.render('module/module-service-2', {
        title: '模块-service'
    });
};

/**
 * GET /module-service-3
 * Module service page.
 */

exports.module_service_3 = function(req, res) {
    res.render('module/module-service-3', {
        title: '模块-service'
    });
};

/**
 * GET /module-service-4
 * Module service page.
 */

exports.module_service_4 = function(req, res) {
    res.render('module/module-service-4', {
        title: '模块-service'
    });
};

/**
 * GET /module-client
 * Module client page.
 */

exports.module_client = function(req, res) {
    res.render('module/module-client', {
        title: '模块-client'
    });
};

/**
 * GET /module-price
 * Module price page.
 */

exports.module_price = function(req, res) {
    res.render('module/module-price', {
        title: '模块-price'
    });
};

/**
 * GET /module-team
 * Module team page.
 */

exports.module_team = function(req, res) {
    res.render('module/module-team', {
        title: '模块-team'
    });
};

/**
 * GET /module-twitter
 * Module twitter page.
 */

exports.module_twitter = function(req, res) {
    res.render('module/module-twitter', {
        title: '模块-twitter'
    });
};

/**
 * GET /page-about-1
 * About page 1.
 */

exports.page_about_1 = function(req, res) {
    res.render('page/page-about-1', {
        title: '页面-about'
    });
};

/**
 * GET /page-about-2
 * About page 2.
 */

exports.page_about_2 = function(req, res) {
    res.render('page/page-about-2', {
        title: '页面-about'
    });
};

/**
 * GET /page-about-3
 * About page 3.
 */

exports.page_about_3 = function(req, res) {
    res.render('page/page-about-3', {
        title: '页面-about'
    });
};

/**
 * GET /page-about-4
 * About page 4.
 */

exports.page_about_4 = function(req, res) {
    res.render('page/page-about-4', {
        title: '页面-about'
    });
};

/**
 * GET /page-services-1
 * page services 1.
 */

exports.page_services_1 = function(req, res) {
    res.render('page/page-services-1', {
        title: '页面-services'
    });
};

/**
 * GET /page-services-2
 * page services 2.
 */

exports.page_services_2 = function(req, res) {
    res.render('page/page-services-2', {
        title: '页面-services'
    });
};

/**
 * GET /page-contact
 * page contact.
 */

exports.page_contact = function(req, res) {
    res.render('page/page-contact', {
        title: '页面-contact'
    });
};

/**
 * GET /page-portfolio-single-1
 * page portfolio single 1.
 */

exports.page_portfolio_single_1 = function(req, res) {
    res.render('page/page-portfolio-single-1', {
        title: '页面-portfolio-single'
    });
};

/**
 * GET /page-portfolio-single-2
 * page portfolio single 2.
 */

exports.page_portfolio_single_2 = function(req, res) {
    res.render('page/page-portfolio-single-2', {
        title: '页面-portfolio-single'
    });
};

/**
 * GET /blog-1
 * blog 1.
 */

exports.blog_1 = function(req, res) {
    res.render('blog/blog-1', {
        title: 'blog'
    });
};

/**
 * GET /blog-2
 * blog 2.
 */

exports.blog_2 = function(req, res) {
    res.render('blog/blog-2', {
        title: 'blog'
    });
};

/**
 * GET /blog-3
 * blog 3.
 */

exports.blog_3 = function(req, res) {
    res.render('blog/blog-3', {
        title: 'blog'
    });
};

/**
 * GET /blog-single-1
 * blog single 1.
 */

exports.blog_single_1 = function(req, res) {
    res.render('blog/blog-single-1', {
        title: 'blog single'
    });
};

/**
 * GET /blog-single-2
 * blog single 2.
 */

exports.blog_single_2 = function(req, res) {
    res.render('blog/blog-single-2', {
        title: 'blog single'
    });
};

/**
 * GET /blog-single-3
 * blog single 3.
 */

exports.blog_single_3 = function(req, res) {
    res.render('blog/blog-single-3', {
        title: 'blog single'
    });
};

/**
 * GET /blog-single-4
 * blog single 4.
 */

exports.blog_single_4 = function(req, res) {
    res.render('blog/blog-single-4', {
        title: 'blog single'
    });
};

/**
 * GET /shop
 * shop home page.
 */

exports.shop = function(req, res) {
    res.render('shop/shop', {
        title: '购物'
    });
};

/**
 * GET /shop-detail
 * shop detail page.
 */

exports.shop_detail = function(req, res) {
    res.render('shop/shop-detail', {
        title: '购物 detail'
    });
};

/**
 * GET /shop-checkout
 * shop checkout page.
 */

exports.shop_checkout = function(req, res) {
    res.render('shop/shop-checkout', {
        title: '购物 结算'
    });
};

/**
 * GET /ui_alerts
 * ui alerts page.
 */

exports.ui_alerts = function(req, res) {
    res.render('ui/ui-alerts', {
        title: 'UI Alerts'
    });
};

/**
 * GET /ui_badges_label
 * ui badges label page.
 */

exports.ui_badges_labels = function(req, res) {
    res.render('ui/ui-badges-labels', {
        title: 'UI Badges Labels'
    });
};

/**
 * GET /ui_blockquotes
 * ui blockquotes page.
 */

exports.ui_blockquotes = function(req, res) {
    res.render('ui/ui-blockquotes', {
        title: 'UI Blockquotes'
    });
};

/**
 * GET /ui_breadcrumbs
 * ui breadcrumbs page.
 */

exports.ui_breadcrumbs = function(req, res) {
    res.render('ui/ui-breadcrumbs', {
        title: 'UI Breadcrumbs'
    });
};

/**
 * GET /ui_modals
 * ui modals page.
 */

exports.ui_modals = function(req, res) {
    res.render('ui/ui-modals', {
        title: 'UI Modals'
    });
};

/**
 * GET /ui_navbars
 * ui navbars page.
 */

exports.ui_navbars = function(req, res) {
    res.render('ui/ui-navbars', {
        title: 'UI Navbars'
    });
};

/**
 * GET /ui_pagination
 * ui pagination page.
 */

exports.ui_pagination = function(req, res) {
    res.render('ui/ui-pagination', {
        title: 'UI Pagination'
    });
};

/**
 * GET /ui_panels
 * ui panels page.
 */

exports.ui_panels = function(req, res) {
    res.render('ui/ui-panels', {
        title: 'UI Panels'
    });
};

/**
 * GET /ui_progress_bars
 * ui progress bars page.
 */

exports.ui_progress_bars = function(req, res) {
    res.render('ui/ui-progress-bars', {
        title: 'UI Progress Bars'
    });
};

/**
 * GET /ui_tabs_accordions
 * ui tabs accordions page.
 */

exports.ui_tabs_accordions = function(req, res) {
    res.render('ui/ui-tabs-accordions', {
        title: 'UI Tabs Accordions'
    });
};

/**
 * GET /ui_typography
 * ui typography page.
 */

exports.ui_typography = function(req, res) {
    res.render('ui/ui-typography', {
        title: 'UI Typography'
    });
};

/**
 * GET /ui_buttons
 * ui buttons page.
 */

exports.ui_buttons = function(req, res) {
    res.render('ui/ui-buttons', {
        title: 'UI Buttons'
    });
};


/**
 * GET /login
 * Login page.
 */
exports.login = function(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/login', {
        title: '登录'
    });
};

/**
 * GET /logout
 * Log out.
 */

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * GET /signup
 * Signup page.
 */

exports.signup = function(req, res) {
    if (req.user) {
        return res.redirect('/');
    }
    res.render('account/signup', {
        title: '注册'
    });
};

/**
 * GET /forgot
 * Forgot Password page.
 */

exports.forgot = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('account/forgot', {
        title: '忘记密码'
    });
};

/**
 * GET /account
 * Profile page.
 */

exports.account = function(req, res) {
    res.render('account/profile', {
        title: '账户管理'
    });
};

/**
 * GET /api
 * List of API examples.
 */

exports.api = function(req, res) {
    res.render('api/index', {
        title: 'API Examples'
    });
};

/**
 * GET /contact
 * Contact form page.
 */

exports.contactForm = function(req, res) {
    res.render('contactForm', {
        title: '客户服务'
    });
};
