const express = require('express');

console.info('setup http server...');
const server = express();
server.use(require('compression')());

const fs = require('fs');

fs.readFile('db/applicationResults.csv', 'utf-8', (err, data) => {
  const results = data.split('\n').reduce((reducer, line) => {
    const items = line.split(';');
    let application = reducer[items[0]];
    if (!application) {
      application = {};
      reducer[items[0]] = application;
    }
    application[items[2]] = items[6];
    return reducer;
  });

  console.info('Getting API ready');
  server.route('/REST/applications')
  .get(function(request, response) {
    response.send(results);
  });

  server.listen(3000);
  console.info('Server ready at http://localhost:3000');
});
