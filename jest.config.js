module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/{components,hooks,utils}/**/*.{js,jsx,ts,tsx}',
    '!src/components/Icon/icons/*.{ts,tsx}',
    '!src/{components,hooks,utils}/**/props.{ts,tsx}',
    '!src/{components,hooks,utils}/**/index.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native|@react-native|react-clone-referenced-element|@unimodules|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-svg)/)'
  ],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mocks/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts']
};
