module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', {
      code: 100,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // array.reduce
        'e', // error
        'ctx', // koa
        'req', // express
        'request', // express
        'res', // express
        'response', // express
        'state' // vuex
      ]
    }],
    'import/extensions': 0
  }
};
