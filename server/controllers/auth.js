/**
 * POST /login
 * Sign in using email and password.
 * @param email
 * @param password
 */

exports.postLogin = function( req, res, next ) {
  req.assert('username', 'Username is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
      req.flash('errors', errors);
      return res.redirect('/login');
  }

  /*
   * request
   */
  if (req.body.username === 'admin@diversity.com' && req.body.password === 'WenJie0107') {
    var user = {
      username: req.body.username
    }
    req.logIn( user, function( err ) {
      if ( err ) {
          return next( err );
      }
      return res.redirect('/');
    });

  } else {
    req.flash('errors', {msg: 'Auth Failed!'});
    return res.redirect('/login');
  }
};
