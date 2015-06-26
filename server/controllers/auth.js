var userRoles = require('../../public/js/routingConfig').userRoles;
var user = {};
/**
 * POST /login
 * Sign in using email and password.
 * @param email
 * @param password
 */

exports.postLogin = function(req, res, next) {
    req.assert('username', 'Username is not valid').isEmail();
    req.assert('password', 'Password cannot be blank').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/login');
    }
    console.log(userRoles);
    /*
     * request
     */
    if (req.body.username === 'user@diversity.com' && req.body.password === 'asdf7890') {
        user = {
            username: req.body.username,
            role: userRoles.user
        };
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/admin.html');
        });

    } else if (req.body.username === 'admin@diversity.com' && req.body.password === 'WenJie0107') {
        user = {
            username: req.body.username,
            role: userRoles.admin
        };
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/admin.html');
        });
    } else {
        req.flash('errors', {
            msg: 'Auth Failed!'
        });
        res.redirect('/login');
    }
};
