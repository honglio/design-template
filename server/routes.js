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
    app.get('/home-2-1.html', passportConf.isAuthenticated, index.home_2_1);
    app.get('/home-3-1.html', passportConf.isAuthenticated, index.home_3_1);
    app.get('/home-4-1.html', passportConf.isAuthenticated, index.home_4_1);
    app.get('/home-5-1.html', passportConf.isAuthenticated, index.home_5_1);
    app.get('/home-2-2.html', passportConf.isAuthenticated, index.home_2_2);
    app.get('/home-3-2.html', passportConf.isAuthenticated, index.home_3_2);
    app.get('/home-4-2.html', passportConf.isAuthenticated, index.home_4_2);
    app.get('/home-5-2.html', passportConf.isAuthenticated, index.home_5_2);

    app.get('/module-advert-1.html', passportConf.isAuthenticated, index.module_advert_1);
    app.get('/module-advert-2.html', passportConf.isAuthenticated, index.module_advert_2);
    app.get('/module-advert-3.html', passportConf.isAuthenticated, index.module_advert_3);
    app.get('/module-advert-4.html', passportConf.isAuthenticated, index.module_advert_4);
    app.get('/module-advert-5.html', passportConf.isAuthenticated, index.module_advert_5);
    app.get('/module-advert-6.html', passportConf.isAuthenticated, index.module_advert_6);

    app.get('/module-slider-1.html', passportConf.isAuthenticated, index.module_slider_1);
    app.get('/module-slider-2.html', passportConf.isAuthenticated, index.module_slider_2);
    app.get('/module-slider-3.html', passportConf.isAuthenticated, index.module_slider_3);
    app.get('/module-slider-4.html', passportConf.isAuthenticated, index.module_slider_4);

    app.get('/module-mixitup-1.html', passportConf.isAuthenticated, index.module_mixitup_1);
    app.get('/module-mixitup-2.html', passportConf.isAuthenticated, index.module_mixitup_2);

    app.get('/module-service-1.html', passportConf.isAuthenticated, index.module_service_1);
    app.get('/module-service-2.html', passportConf.isAuthenticated, index.module_service_2);
    app.get('/module-service-3.html', passportConf.isAuthenticated, index.module_service_3);
    app.get('/module-service-4.html', passportConf.isAuthenticated, index.module_service_4);

    app.get('/module-client.html', passportConf.isAuthenticated, index.module_client);
    app.get('/module-price.html', passportConf.isAuthenticated, index.module_price);
    app.get('/module-team.html', passportConf.isAuthenticated, index.module_team);
    app.get('/module-twitter.html', passportConf.isAuthenticated, index.module_twitter);

    app.get('/page-about-1.html', passportConf.isAuthenticated, index.page_about_1);
    app.get('/page-about-2.html', passportConf.isAuthenticated, index.page_about_2);
    app.get('/page-about-3.html', passportConf.isAuthenticated, index.page_about_3);
    app.get('/page-about-4.html', passportConf.isAuthenticated, index.page_about_4);

    app.get('/page-services-1.html', passportConf.isAuthenticated, index.page_services_1);
    app.get('/page-services-2.html', passportConf.isAuthenticated, index.page_services_2);

    app.get('/page-portfolio-single-1.html', passportConf.isAuthenticated, index.page_portfolio_single_1);
    app.get('/page-portfolio-single-2.html', passportConf.isAuthenticated, index.page_portfolio_single_2);

    app.get('/page-contact.html', passportConf.isAuthenticated, index.page_contact);

    app.get('/blog-1.html', passportConf.isAuthenticated, index.blog_1);
    app.get('/blog-2.html', passportConf.isAuthenticated, index.blog_2);
    app.get('/blog-3.html', passportConf.isAuthenticated, index.blog_3);

    app.get('/blog-single-1.html', passportConf.isAuthenticated, index.blog_single_1);
    app.get('/blog-single-2.html', passportConf.isAuthenticated, index.blog_single_2);
    app.get('/blog-single-3.html', passportConf.isAuthenticated, index.blog_single_3);
    app.get('/blog-single-4.html', passportConf.isAuthenticated, index.blog_single_4);

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
