const shuffle = require('shuffle-array');
const data = require('./data.json');

module.exports = (req, res) => {
  let result = data;
  if (req.url === '/random') {
    result = shuffle(data, { copy: true });
  }

  result = result.map((item, index) => Object.assign({ id: index }, item));
  res.end(JSON.stringify(result));
};
