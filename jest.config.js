module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/{components,domain,hooks,utils}/**/*.{js,jsx,ts,tsx}',
    '!src/{components,hooks,utils}/**/{index}.ts',
    '!src/{components,domain,hooks,utils}/**/props.ts',
    '!src/components/Icon/icons/*.{ts,tsx}',
    '!src/components/**/{constants,mappers,styles,variants}.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native|@react-native|react-clone-referenced-element|@unimodules|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-svg)/)'
  ],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mocks/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts']
};
