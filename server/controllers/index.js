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
 * GET /ui-buttons
 * ui buttons page.
 */

exports.ui_buttons = function(req, res) {
    res.render('ui/ui_buttons', {
        title: 'UI buttons'
    });
};

exports.ui_listView = function(req, res) {
  res.render('ui/ui_listView');
}

exports.ui_timeline = function(req, res) {
  res.render('ui/ui_timeline');
}

exports.ui_widgets = function(req, res) {
  res.render('ui/ui_widgets');
}

exports.form_elements = function(req, res) {
  res.render('form/form_elements');
}
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
