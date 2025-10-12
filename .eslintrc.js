module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@tanstack/query/recommended'],
  plugins: ['import', '@tanstack/query'],
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
                  '@+(api|branding|components|domain|hooks|infra|routes|screens|services|styles|test|theme|types|utils|validations)',
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
    },
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
