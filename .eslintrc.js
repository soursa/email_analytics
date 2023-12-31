module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
      },
    },
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'i18next/no-literal-string': 2,
    'react/display-name': 'off',
    'new-cap': 'off',
  },
};
