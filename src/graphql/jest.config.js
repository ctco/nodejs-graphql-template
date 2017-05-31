module.exports = Object.assign(
  {},
  require('../../jest/jest.default.config.js'),
  process.env.CI ? require('../../jest/jest.ci.default.config.js') : {},
  {
    "setupFiles": [
      "./__tests__/__setup__/env-test.ts"
    ]
  }
);
