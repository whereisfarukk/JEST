import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginReact from "eslint-plugin-react";

const { rules } = eslintPluginReact;

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      "no-unused-vars": "warn",
      quotes: ["warn", "single"],
      semi: ["warn", "always"],
    },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
