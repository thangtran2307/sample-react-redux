module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: [
    '/src/serviceWorker.ts',
    '/build/**',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': 0,
    'react/jsx-no-bind': 0,
  },
};
