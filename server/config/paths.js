const path = require('path');

module.exports = {
  favicon: path.resolve(__dirname, '../static/favicon.png'),
  indexHtml: path.resolve(__dirname, '../../target/index.html'),
  static: path.resolve(__dirname, '../../target')
};
