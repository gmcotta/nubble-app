module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/{components,utils}/**/*.{js,jsx,ts,tsx}',
    '!src/components/Icon/icons/*.{ts,tsx}'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native|@react-native|react-clone-referenced-element|@unimodules|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-svg)/)'
  ],
  moduleDirectories: ['node_modules', './src/test']
};
