import 'babel-polyfill';


var exclude = [
  './main.js'
];

var context = require.context('./sources', true, /\.js$/);

context.keys().forEach(function(key) {
  if (exclude.indexOf(key) === -1) context(key);
});
