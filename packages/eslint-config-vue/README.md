# `@thrivehive/eslint-plugin-vue`

[![npm version](https://badge.fury.io/js/%40thrivehive%2Feslint-config-vue.svg)](https://badge.fury.io/js/%40thrivehive%2Feslint-config-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

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