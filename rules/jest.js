module.exports = {
  plugins: ['jest'],
  overrides: {
    files: ['**/*.spec.js', '**/*.spec.jsx', '**/*.spec.ts', '**/*.spec.tsx'],
    extends: ['plugin:jest/recommended'],
    env: {
      'jest/globals': true,
    },
    rules: {
      'jest/expect-expect': 'error',
      'jest/no-empty-title': 'error',
      'jest/no-export': 'error',
      'jest/no-if': 'error',
      'jest/no-standalone-expect': 'error',
      'jest/no-truthy-falsy': 'warn',
      'jest/prefer-called-with': 'warn',
      'jest/prefer-to-be-null': 'error',
      'jest/prefer-to-be-undefined': 'error',
      'jest/prefer-to-contain': 'error',
      'jest/prefer-to-have-length': 'error',
      'jest/require-top-level-describe': 'warn',
    },
  },
};
