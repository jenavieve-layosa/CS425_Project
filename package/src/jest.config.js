module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.js"
    },
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$",
    moduleFileExtensions: [
      "js",
      "json",
      "jsx"
    ]
  };
  