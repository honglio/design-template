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

    app.get('/', index.home);
    app.get('/home-2-1', index.home_2_1);
    app.get('/home-3-1', index.home_3_1);
    app.get('/home-4-1', index.home_4_1);
    app.get('/home-5-1', index.home_5_1);
    app.get('/home-2-2', index.home_2_2);
    app.get('/home-3-2', index.home_3_2);
    app.get('/home-4-2', index.home_4_2);
    app.get('/home-5-2', index.home_5_2);

    app.get('/module-advert-1', index.module_advert_1);
    app.get('/module-advert-2', index.module_advert_2);
    app.get('/module-advert-3', index.module_advert_3);
    app.get('/module-advert-4', index.module_advert_4);
    app.get('/module-advert-5', index.module_advert_5);
    app.get('/module-advert-6', index.module_advert_6);
    app.get('/module-advert-7', index.module_advert_7);

    app.get('/module-blog-1', index.module_blog_1);
    app.get('/module-blog-2', index.module_blog_2);

    app.get('/module-portfolio-1', index.module_portfolio_1);
    app.get('/module-portfolio-2', index.module_portfolio_2);

    app.get('/module-service-1', index.module_service_1);
    app.get('/module-service-2', index.module_service_2);
    app.get('/module-service-3', index.module_service_3);
    app.get('/module-service-4', index.module_service_4);

    app.get('/module-client', index.module_client);
    app.get('/module-price', index.module_price);
    app.get('/module-team', index.module_team);
    app.get('/module-twitter', index.module_twitter);

    // page not found
    app.get('*', index.notfound);
};
