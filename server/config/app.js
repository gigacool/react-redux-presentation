const compression = require('compression');
const express = require('express');
const favicon = require('serve-favicon');

const passport = require('passport');
const session = require('express-session');

const helmet = require('helmet');
const paths = require('./paths');


module.exports = (app) => {
  // server address
  app.set('host', process.env.HOST || '0.0.0.0');
  app.set('port', process.env.PORT || 3000);

  // HTTP headers
  app.disable('x-powered-by');
  app.use(helmet.frameguard({action: 'deny'}));
  app.use(helmet.hsts({force: true, maxAge: 7776000000})); // 90 days
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
  app.use(helmet.ieNoOpen());

  // gzip compression
  app.use(compression());

  // session management
  app.use(session({ secret: 'some secret message' })); // FIXME integrate this from command line
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  // development env
  if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
  }

  // static files
  app.use(express.static(paths.static, {index: false}));
  app.use(favicon(paths.favicon));
};
