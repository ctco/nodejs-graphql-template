module.exports = Object.assign(
  {},
  require('./default.config.js'),
  {
    "testRegex": ".*\\.e2e\\.(ts)$",
    "roots": [
      "e2e"
    ]
  }
);
