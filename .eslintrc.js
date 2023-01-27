module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "@typescript-eslint"],
  settings: {},
  rules: { "no-console": "warn" },
};
