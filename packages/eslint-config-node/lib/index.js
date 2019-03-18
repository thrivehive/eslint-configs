const env = process.env.NODE_ENV;
const isProd = env === 'production';

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
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
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
        'state', // vuex,
        '$el' // dom forEach
      ]
    }],
    'import/extensions': 0,
    'object-shorthand': ['error', 'always', {
      avoidQuotes: false
    }],
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 0,
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: false,
        object: false
      }
    }]
  }
};
