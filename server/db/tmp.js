const fs = require('fs');

fs.readFile('applicationResults.csv', 'utf-8', (err, data) => {

  const results = data.split('\r\n').reduce((reducer, line) => {
    const items = line.split(';');
    let application = reducer[items[0]];
    if (!application) {
      application = {};
      reducer[items[0]] = application;
    }
    application[items[2]] = items[6];
    return reducer;
  },{});

  let applications = [];
  for (let key in results) {
    let app = {
      name: key,
      results: results[key]
    };
    applications.push(app)
  }

  fs.writeFileSync("applications.json", JSON.stringify({applications: applications}, null, 2), 'utf-8');
  console.log(JSON.stringify(results, null, 2));
});
