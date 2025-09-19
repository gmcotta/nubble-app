module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern:
                  '@+(components|hooks|routes|screens|styles|theme|validations)',
                group: 'internal',
                position: 'before'
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ]
      }
    }
  ]
};
