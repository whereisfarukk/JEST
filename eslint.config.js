import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';

const { rules } = eslintPluginReact;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'no-unused-vars': 'warn',
      quotes: ['error', 'single'],
      semi: ['warn', 'always'],
    },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
