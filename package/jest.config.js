module.exports = {
  // Indicates that the root directory of the project is the current directory
  rootDir: '.',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // A list of paths to directories that Jest should use to search for files in
  testMatch: ['<rootDir>/src/**/__tests__/**/*.js?(x)', '<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],

  // An array of file paths or glob patterns that should be watched
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The maximum amount of workers used to run your tests. Can be specified as % or number
  maxWorkers: '50%',

  // Indicates whether each individual test should be reported during the run
  verbose: true,

 
  preset: 'babel-jest',


   
  
};
