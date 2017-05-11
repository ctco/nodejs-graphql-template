module.exports = Object.assign({}, require('../../jest.default.config'), {
  "setupFiles": [
    "./__tests__/__setup__/env-test.ts"
  ],
});
