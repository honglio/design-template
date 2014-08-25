exports.notfound = function(req, res) {
  res.render('404', {
    title: '网页无法访问'
  });
};

/**
 * GET /
 * Home page.
 */

exports.home = function(req, res) {
  res.render('home', {
    title: '首页'
  });
};

/**
 * GET /home-2-1
 * Home page.
 */

exports.home_2_1 = function(req, res) {
  res.render('home-2-1', {
    title: '首页'
  });
};

/**
 * GET /home-3-1
 * Home page.
 */

exports.home_3_1 = function(req, res) {
  res.render('home-3-1', {
    title: '首页'
  });
};

/**
 * GET /home-4-1
 * Home page.
 */

exports.home_4_1 = function(req, res) {
  res.render('home-4-1', {
    title: '首页'
  });
};

/**
 * GET /home-5-1
 * Home page.
 */

exports.home_5_1 = function(req, res) {
  res.render('home-5-1', {
    title: '首页'
  });
};

/**
 * GET /home-2-2
 * Home page.
 */

exports.home_2_2 = function(req, res) {
  res.render('home-2-2', {
    title: '首页'
  });
};

/**
 * GET /home-3-2
 * Home page.
 */

exports.home_3_2 = function(req, res) {
  res.render('home-3-2', {
    title: '首页'
  });
};

/**
 * GET /home-4-2
 * Home page.
 */

exports.home_4_2 = function(req, res) {
  res.render('home-4-2', {
    title: '首页'
  });
};

/**
 * GET /home-5-2
 * Home page.
 */

exports.home_5_2 = function(req, res) {
  res.render('home-5-2', {
    title: '首页'
  });
};

/**
 * GET /module-advert-1
 * Module advert page.
 */

exports.module_advert_1 = function(req, res) {
  res.render('module-advert-1', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-2
 * Module advert page.
 */

exports.module_advert_2 = function(req, res) {
  res.render('module-advert-2', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-3
 * Module advert page.
 */

exports.module_advert_3 = function(req, res) {
  res.render('module-advert-3', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-4
 * Module advert page.
 */

exports.module_advert_4 = function(req, res) {
  res.render('module-advert-4', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-5
 * Module advert page.
 */

exports.module_advert_5 = function(req, res) {
  res.render('module-advert-5', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-6
 * Module advert page.
 */

exports.module_advert_6 = function(req, res) {
  res.render('module-advert-6', {
    title: '模块-广告'
  });
};

/**
 * GET /module-advert-7
 * Module advert page.
 */

exports.module_advert_7 = function(req, res) {
  res.render('module-advert-7', {
    title: '模块-广告'
  });
};

/**
 * GET /module-blog-1
 * Module blog page.
 */

exports.module_blog_1 = function(req, res) {
  res.render('module-blog-1', {
    title: '模块-blog'
  });
};

/**
 * GET /module-blog-2
 * Module blog page.
 */

exports.module_blog_2 = function(req, res) {
  res.render('module-blog-2', {
    title: '模块-blog'
  });
};

/**
 * GET /module-portfolio-1
 * Module portfolio page.
 */

exports.module_portfolio_1 = function(req, res) {
  res.render('module-portfolio-1', {
    title: '模块-portfolio'
  });
};

/**
 * GET /module-portfolio-2
 * Module portfolio page.
 */

exports.module_portfolio_2 = function(req, res) {
  res.render('module-portfolio-2', {
    title: '模块-portfolio'
  });
};

/**
 * GET /module-service-1
 * Module service page.
 */

exports.module_service_1 = function(req, res) {
  res.render('module-service-1', {
    title: '模块-service'
  });
};

/**
 * GET /module-service-2
 * Module service page.
 */

exports.module_service_2 = function(req, res) {
  res.render('module-service-2', {
    title: '模块-service'
  });
};

/**
 * GET /module-service-3
 * Module service page.
 */

exports.module_service_3 = function(req, res) {
  res.render('module-service-3', {
    title: '模块-service'
  });
};

/**
 * GET /module-service-4
 * Module service page.
 */

exports.module_service_4 = function(req, res) {
  res.render('module-service-4', {
    title: '模块-service'
  });
};

/**
 * GET /module-client
 * Module client page.
 */

exports.module_client = function(req, res) {
  res.render('module-client', {
    title: '模块-client'
  });
};

/**
 * GET /module-price
 * Module price page.
 */

exports.module_price = function(req, res) {
  res.render('module-price', {
    title: '模块-price'
  });
};

/**
 * GET /module-team
 * Module team page.
 */

exports.module_team = function(req, res) {
  res.render('module-team', {
    title: '模块-team'
  });
};

/**
 * GET /module-twitter
 * Module twitter page.
 */

exports.module_twitter = function(req, res) {
  res.render('module-twitter', {
    title: '模块-twitter'
  });
};

/**
 * GET /login
 * Login page.
 */
exports.login = function(req, res) {
  if (req.user) { return res.redirect('/'); }
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
  if (req.user) { return res.redirect('/'); }
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