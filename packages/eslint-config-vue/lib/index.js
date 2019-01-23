module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 0,
    'max-len': ['warn', {
      code: 100,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
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
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 0
    }],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 0,
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        'state' // for Vuex state
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
