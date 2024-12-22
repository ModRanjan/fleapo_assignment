module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    // Sort imports automatically
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Remove unused imports automatically
    'unused-imports/no-unused-imports': 'error',
    // Other custom rules
    'react/jsx-key': 'warn',
  },
};
