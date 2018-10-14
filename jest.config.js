module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.preprocess.js',
  },
  reporters: ['default', 'jest-tap-reporter', 'jest-junit'],
  testURL: 'http://localhost',
  setupFiles: ['./jest.setup.js'],
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
