module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    commonjs: true,
  },
  globals: {
    __dirname: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    semi: [2, 'never'],
    'no-unused-vars': 'error',
    'import/no-named-as-default-member': 0,
  },
  parserOptions: {
    sourceType: 'module',
  },
}
