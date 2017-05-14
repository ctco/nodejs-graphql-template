module.exports = Object.assign({}, require('./jest.config'), {
  "testResultsProcessor": "./node_modules/jest-junit",
  "coverageReporters": ["cobertura", "lcov"],
  "coverageDirectory": "reports/coverage",
  "mapCoverage" : true,
  "collectCoverage" : true
});
