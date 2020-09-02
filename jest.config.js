module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleDirectories: ['node_modules', './'],
  clearMocks: true,
  coverageDirectory: '.coverage',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
