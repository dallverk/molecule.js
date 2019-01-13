module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  "coverageDirectory": "./coverage",
  "coverageThreshold": {
    "global": {
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  }
};