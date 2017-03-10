const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');

const users = JSON.parse(fs.readFileSync('server/db/users.json', 'UTF-8'));

module.export = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.local.email);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    done(null, users.local[id]);
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(request, email, password, done) {
    const user = users[email];
    if (user) {
      return done(null, false, 'not available');
    }
    const newUser = {
      local: {
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
      }
    };
    users[email] = newUser;
    fs.writeFileSync('server/db/users.json', JSON.parse(users, null, 2), 'UTF-8');
    done(null, newUser);
  }));
};
