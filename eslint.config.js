import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        ...globals.node
      },
      ecmaVersion: 'latest'
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error'
    }
  }
];
