module.exports = Object.assign(
  {},
  require('./default.config.js'),
  {
    "testPathIgnorePatterns": [
      "/src/graphql"
    ]
  }
);
