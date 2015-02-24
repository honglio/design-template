var _ = require('underscore'),
    passport = require('passport');

// serialize sessions
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done( null, user );
});

// Login Required middleware.

exports.isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

// Authorization Required middleware.

exports.isAuthorized = function(req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];

    if (_.findWhere(req.user.tokens, {
            kind: provider
        })) {
        next();
    } else {
        res.redirect('/auth/' + provider);
    }
};

// User authorization routing middleware

exports.user = {
    isAuthorized: function(req, res, next) {
        console.log(req.profile);
        console.log(req.user);
        if (req.profile.id !== req.user.id) {
            req.flash('errors', {
                msg: 'You are not authorized'
            });
            return res.redirect('/account/' + req.user.id);
        }
        next();
    }
};
// Articles authorization routing middleware

exports.article = {
    isAuthorized: function(req, res, next) {
        if (req.user.id !== req.article.user.id) {
            req.flash('errors', {
                msg: 'You are not authorized'
            });
            return res.redirect('/articles/' + req.article.id);
        }
        next();
    }
};

// Comment authorization routing middleware

exports.comment = {
    isAuthorized: function(req, res, next) {
        // if the current user is comment owner or article owner
        // give them authority to delete
        if (req.user.id === req.comment.user.id || req.user.id === req.article.user.id) {
            next();
        } else {
            req.flash('errors', {
                msg: 'You are not authorized'
            });
            res.redirect('/articles/' + req.article.id);
        }
    }
};
