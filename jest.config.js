module.exports = Object.assign(
  {},
  require('./tools/jest.default.config.js'),
  process.env.TEST_CI && require('./tools/jest.ci.default.config.js'),
  {
    "testPathIgnorePatterns": [
      "/src/graphql/__tests__"
    ]
  }
);
