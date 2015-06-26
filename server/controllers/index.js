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
    var role = userRoles.public,
        username = '';
    if (req.user) {
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
