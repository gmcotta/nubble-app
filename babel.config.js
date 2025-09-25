module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@branding': './src/branding',
          '@components': './src/components',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@validations': './src/validations'
        }
      }
    ]
  ]
};
