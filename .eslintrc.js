module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'prettier', 'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': 'error',
    'semi': ['error', 'never'],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'none',
        'bracketSpacing': true
      }
    ]
  }
}
