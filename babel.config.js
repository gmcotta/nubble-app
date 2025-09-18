module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from', 
    ["module-resolver", {
      "root": ["./src"],
      "extensions": ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      "alias": {
        "@components": "./src/components",
        "@hooks": "./src/hooks",
        "@routes": "./src/routes",
        "@screens": "./src/screens",
        "@styles": "./src/styles",
        "@theme": "./src/theme",
        "@validations": "./src/theme"
      }
    }]
  ]
};
