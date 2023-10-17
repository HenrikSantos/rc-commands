"use strict";

module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.js",
        ".eslintrc.cjs",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    strict: "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "arrow-spacing": "error",
    "no-extra-semi": "error",
    "space-before-function-paren": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "template-curly-spacing": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-template": "error",
    "no-extra-parens": "error",
    "no-undef": "error",
    "no-use-before-define": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "func-call-spacing": ["error", "never"],
    "eol-last": ["error", "always"]
  },
};
