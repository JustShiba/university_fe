module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-underscore-dangle': 'off',
    'react/no-unknown-property': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-duplicate-imports': 'error',

    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'import/order': 'warn',
    'implicit-arrow-linebreak': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-confusing-arrow': 'off',
    'linebreak-style': 'off',
    'no-unused-expressions': 'off',
    indent: ['error', 2],
    'jsx-a11y/anchor-is-valid': 0,
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
