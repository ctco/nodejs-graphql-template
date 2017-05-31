module.exports = Object.assign(
  {},
  require('./jest/jest.default.config.js'),
  process.env.CI && require('./jest/jest.ci.default.config.js'),
  {
    "testPathIgnorePatterns": [
      "/src/graphql/__tests__"
    ]
  }
);
