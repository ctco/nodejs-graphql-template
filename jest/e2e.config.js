const path = require('path');

module.exports = Object.assign(
  {},
  require('./default.config.js'),
  {
    "testRegex": ".*\\.e2e\\.(ts)$",
    "roots": [
      "e2e"
    ],
    "setupFiles": [
      path.join(__dirname, "./__setup__/e2e-setup.ts")
    ],
  }
);
