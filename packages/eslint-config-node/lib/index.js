module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': ['warn', {
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'e',
        'ctx',
        'req',
        'request',
        'res',
        'response',
        'state'
      ]
    }]
  }
};
