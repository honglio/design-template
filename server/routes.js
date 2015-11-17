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

    app.get('/ui_buttons.html', passportConf.isAuthenticated, index.ui_buttons);
    app.get('/ui_listView.html', passportConf.isAuthenticated, index.ui_listView);
    app.get('/ui_timeline.html', passportConf.isAuthenticated, index.ui_timeline);
    app.get('/ui_widgets.html', passportConf.isAuthenticated, index.ui_widgets);

    app.get('/form_elements.html', passportConf.isAuthenticated, index.form_elements);
    // page not found
    app.get('*', index.notfound);
};
