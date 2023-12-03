module.exports = {
  extends: "eslint:recommended",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    mocha: true,
    node: true,
    es6: true,
  },
};
