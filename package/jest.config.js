module.exports = {
    // The root directory that Jest should scan for tests and modules within
    roots: [
      "<rootDir>/src"
    ],
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "**/__tests__/**/*.js",
      "**/?(*.)+(spec|test).js"
    ],
    // Module file extensions that Jest should use
    moduleFileExtensions: [
      "js",
      "json",
      "jsx",
      "ts",
      "tsx",
      "node"
    ],
    // Transform files with these extensions before running tests
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
  };
  