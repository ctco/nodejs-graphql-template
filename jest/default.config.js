const path = require('path');

module.exports = Object.assign(
  {},
  {
    "rootDir": path.join(__dirname, '../'),
    "moduleFileExtensions": [
      "ts",
      "js",
      "json"
    ],
    "transform": {
      "\\.(ts)$": "ts-jest/preprocessor"
    },
    "testRegex": "/__tests__/.*\\.test\\.(ts)$",
    "setupFiles": [
      path.join(__dirname, "./__setup__/setup.ts")
    ],
    "testEnvironment": "node",
  },
  process.env.CI ? require('./ci.partial.config.js') : {}
)
;
