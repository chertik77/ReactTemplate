module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: { 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]},
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
    {
    files: ['*.html', '*.blade.php'],
    parser: '@angular-eslint/template-parser',
  },
  ],
};
