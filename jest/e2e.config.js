module.exports = Object.assign(
  {},
  require('./default.config.js'),
  {
    "testRegex": ".*\\.test\\.(ts)$",
    "roots": [
      "tests"
    ]
  }
);
