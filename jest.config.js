module.exports = {
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: [
    './internals/scripts/CheckBuiltsExist.js',
  ],
};
