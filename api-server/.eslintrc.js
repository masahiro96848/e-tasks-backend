/* eslint-disable no-unused-vars */
const OFF = 'off';
const WARN = 'warn';
const ERR = 'error';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-nestjs',
    'prettier',
    'import',
    'unused-imports',
    'import-access',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // '@typescript-eslint/naming-convention': [ERR],
    'import/no-named-as-default': OFF,
    '@typescript-eslint/no-unused-vars': ERR,
    'unused-imports/no-unused-imports': ERR,
    '@typescript-eslint/explicit-function-return-type': ERR,
    '@typescript-eslint/explicit-module-boundary-types': ERR,
    '@typescript-eslint/no-explicit-any': ERR,
    'prettier/prettier': ERR,
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'import/named': OFF,
    'import-access/jsdoc': [
      'error',
      {
        indexLoophole: true,
        filenameLoophole: false,
        defaultImportability: 'public', // "public" | "package" | "private"
        treatSelfReferenceAs: 'external', // "internal" | "external"
      },
    ],
    eqeqeq: 'error',
    '@typescript-eslint/no-namespace': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
