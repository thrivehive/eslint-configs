# `@thrivehive/eslint-plugin-vue`

## About

This eslint config extends the official [Vue Airbnb config](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/eslint-config-airbnb#readme), and the [@thrivehive/eslint-config-node](../eslint-config-node) config.

## Installation

Using NPM:

```bash
npm install --save-dev @thrivehive/eslint-plugin-vue
```

Using Yarn:
```bash
yarn add --dev @thrivehive/eslint-plugin-vue
```

## Usage

In .eslintrc.js:

```js
module.exports = {
  extends: [
    '@thrivehive/vue'
  ]
};
```