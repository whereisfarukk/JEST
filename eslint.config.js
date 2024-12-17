import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Add Jest globals here
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'no-unused-vars': 'warn',
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
    },
  },
  pluginJs.configs.recommended,
];
