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
                  '@+(api|branding|components|domain|hooks|infra|routes|screens|services|styles|theme|types|utils|validations)',
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
