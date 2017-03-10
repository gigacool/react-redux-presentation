
module.exports = (app, options) => {

  const configuration = {
    tokenDuration: 24 * 7,
    ...options
  };

  app.post('/signup', passport.authenticate('local-signup'), { });

  // create user (login/pass/email)
  // reset password
  // authenticate -> create token
  // validate token
  // change password





};
