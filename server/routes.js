/**
 * Controllers
 */

var index = require('../server/controllers/index');

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

    app.get('/index.html', index.home);
    app.get('/home-2-1.html', index.home_2_1);
    app.get('/home-3-1.html', index.home_3_1);
    app.get('/home-4-1.html', index.home_4_1);
    app.get('/home-5-1.html', index.home_5_1);
    app.get('/home-2-2.html', index.home_2_2);
    app.get('/home-3-2.html', index.home_3_2);
    app.get('/home-4-2.html', index.home_4_2);
    app.get('/home-5-2.html', index.home_5_2);

    app.get('/module-advert-1.html', index.module_advert_1);
    app.get('/module-advert-2.html', index.module_advert_2);
    app.get('/module-advert-3.html', index.module_advert_3);
    app.get('/module-advert-4.html', index.module_advert_4);
    app.get('/module-advert-5.html', index.module_advert_5);
    app.get('/module-advert-6.html', index.module_advert_6);

    app.get('/module-slider-1.html', index.module_slider_1);
    app.get('/module-slider-2.html', index.module_slider_2);
    app.get('/module-slider-3.html', index.module_slider_3);
    app.get('/module-slider-4.html', index.module_slider_4);

    app.get('/module-mixitup-1.html', index.module_mixitup_1);
    app.get('/module-mixitup-2.html', index.module_mixitup_2);

    app.get('/module-service-1.html', index.module_service_1);
    app.get('/module-service-2.html', index.module_service_2);
    app.get('/module-service-3.html', index.module_service_3);
    app.get('/module-service-4.html', index.module_service_4);

    app.get('/module-client.html', index.module_client);
    app.get('/module-price.html', index.module_price);
    app.get('/module-team.html', index.module_team);
    app.get('/module-twitter.html', index.module_twitter);

    app.get('/page-about-1.html', index.page_about_1);
    app.get('/page-about-2.html', index.page_about_2);
    app.get('/page-about-3.html', index.page_about_3);
    app.get('/page-about-4.html', index.page_about_4);

    app.get('/page-services-1.html', index.page_services_1);
    app.get('/page-services-2.html', index.page_services_2);

    app.get('/page-portfolio-single-1.html', index.page_portfolio_single_1);
    app.get('/page-portfolio-single-2.html', index.page_portfolio_single_2);

    app.get('/page-contact.html', index.page_contact);

    app.get('/blog-1.html', index.blog_1);
    app.get('/blog-2.html', index.blog_2);
    app.get('/blog-3.html', index.blog_3);

    app.get('/blog-single-1.html', index.blog_single_1);
    app.get('/blog-single-2.html', index.blog_single_2);
    app.get('/blog-single-3.html', index.blog_single_3);
    app.get('/blog-single-4.html', index.blog_single_4);

    app.get('/shop.html', index.shop);
    app.get('/shop-detail.html', index.shop_detail);
    app.get('/shop-checkout.html', index.shop_checkout);

    app.get('/ui-alerts.html', index.ui_alerts);
    app.get('/ui-badges-labels.html', index.ui_badges_labels);
    app.get('/ui-blockquotes.html', index.ui_blockquotes);
    app.get('/ui-breadcrumbs.html', index.ui_breadcrumbs);
    app.get('/ui-modals.html', index.ui_modals);
    app.get('/ui-navbars.html', index.ui_navbars);
    app.get('/ui-pagination.html', index.ui_pagination);
    app.get('/ui-panels.html', index.ui_panels);
    app.get('/ui-progress-bars.html', index.ui_progress_bars);
    app.get('/ui-tabs-accordions.html', index.ui_tabs_accordions);
    app.get('/ui-typography.html', index.ui_typography);

    // page not found
    app.get('*', index.notfound);
};
