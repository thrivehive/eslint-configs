module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': 0,
    'max-len': ['warn', {
      code: 100,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
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
