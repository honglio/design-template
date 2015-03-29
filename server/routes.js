/**
 * Controllers
 */

var index = require('../server/controllers/index');
var auth = require('../server/controllers/auth');
var passportConf = require('../config/passport');

/*
 * Routes Example
 *
 * Name       Method    Path
 * ---------------------------------------------
 * Index      GET     /restaurants
 * Show       GET     /restaurants/:id
 * New        GET     /restaurants/new
 * Create     POST    /restaurants
 * Edit       GET     /restaurants/edit
 * Update       PUT     /restaurants/:id
 * Delete       GET     /restaurants/delete
 * Destroy      DELETE    /restaurants/:id
 * Search     GET     /restaurants/search?<query>
 * Showcodes    GET     /restaurants/:id/codes
 * Generatecodes  GET     /restaurants/:id/generate?n=<number>
 */

module.exports = function (app, passport) {
    app.get('/login', index.login);
    app.get('/admin.html', index.admin);
    /**
     * Authentication routes.
     */
    app.post('/login', auth.postLogin);
    app.get('/logout', index.logout);

    app.get('/index.html', passportConf.isAuthenticated, index.home);

    app.get('/shop.html', passportConf.isAuthenticated, index.shop);
    app.get('/shop-detail.html', passportConf.isAuthenticated, index.shop_detail);
    app.get('/shop-checkout.html', passportConf.isAuthenticated, index.shop_checkout);

    app.get('/ui-alerts.html', passportConf.isAuthenticated, index.ui_alerts);
    app.get('/ui-badges-labels.html', passportConf.isAuthenticated, index.ui_badges_labels);
    app.get('/ui-blockquotes.html', passportConf.isAuthenticated, index.ui_blockquotes);
    app.get('/ui-breadcrumbs.html', passportConf.isAuthenticated, index.ui_breadcrumbs);
    app.get('/ui-modals.html', passportConf.isAuthenticated, index.ui_modals);
    app.get('/ui-navbars.html', passportConf.isAuthenticated, index.ui_navbars);
    app.get('/ui-pagination.html', passportConf.isAuthenticated, index.ui_pagination);
    app.get('/ui-panels.html', passportConf.isAuthenticated, index.ui_panels);
    app.get('/ui-progress-bars.html', passportConf.isAuthenticated, index.ui_progress_bars);
    app.get('/ui-tabs-accordions.html', passportConf.isAuthenticated, index.ui_tabs_accordions);
    app.get('/ui-typography.html', passportConf.isAuthenticated, index.ui_typography);
    app.get('/ui-buttons.html', passportConf.isAuthenticated, index.ui_buttons);

    // page not found
    app.get('*', index.notfound);
};
