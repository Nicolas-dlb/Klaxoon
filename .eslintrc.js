module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".tsx", ".ts", "js", "jsx"] },
    ],
    "import/no-unresolved": [
      2,
      { esmodule: false, amd: false, commonjs: false },
    ],

    "no-use-before-define": "off",
    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "no-param-reassign": 0,
    "prefer-destructuring": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
