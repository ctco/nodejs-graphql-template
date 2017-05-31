/* DO NOT use jest template variables here, like <RootDir>, as their value will
*  be changed inside descendant configuration files */

const path = require('path');

module.exports = {
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    "\\.(ts)$": "ts-jest/preprocessor"
  },
  "testRegex": "/__tests__/.*\\.test\\.(ts)$"
};
