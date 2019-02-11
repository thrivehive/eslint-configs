const config = require('@thrivehive/eslint-config-node');

Object.assign(config, {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ]
});

Object.assign(config.rules, {
  'vue/component-name-in-template-casing': [
    'error', 'kebab-case'
  ],
  'vue/name-property-casing': ['error', 'kebab-case'],
  'vue/script-indent': ['error', 2, {
    baseIndent: 0,
    switchCase: 0,
    ignores: []
  }],
  'vue/max-attributes-per-line': ['error', {
    singleline: 100,
    multiline: {
      max: 1,
      allowFirstLine: false
    }
  }],
  'vue/html-closing-bracket-spacing': 'error',
  'vue/no-v-html': 'off',
  'vue/singleline-html-element-content-newline': 0
});

module.exports = config;
