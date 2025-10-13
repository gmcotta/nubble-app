import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/{component,domain,hooks,infra,screens,utils}/**/*.{js,jsx,ts,tsx}',
    '!src/{component,hooks,infra,screens,utils}/**/index.ts',
    '!src/{component,domain,hooks,infra,screens,utils}/**/props.ts',
    '!src/component/Icon/icons/*.{ts,tsx}',
    '!src/{component,infra}/**/{constants,mappers,styles,variants}.ts',
    '!src/domain/index.ts',
    '!src/domain/{auth,user}/useCases/index.ts',
    '!src/screens/**/{constants,props,styles}.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native?|@react-native|react-clone-referenced-element|@unimodules|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-svg)?|react-native-safe-area-context/)'
  ],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mocks/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  testEnvironmentOptions: {
    customExportConditions: ['']
  },
  testTimeout: 15000
};

export default config;
