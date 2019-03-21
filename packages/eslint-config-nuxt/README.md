# `@thrivehive/eslint-plugin-nuxt`

[![npm version](https://badge.fury.io/js/%40thrivehive%2Feslint-config-nuxt.svg)](https://badge.fury.io/js/%40thrivehive%2Feslint-config-nuxt)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## About

This eslint config extends the official [Vue Airbnb config](https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/eslint-config-airbnb#readme), and the [@thrivehive/eslint-config-node](../eslint-config-node) config, and the official [Nuxt config](https://github.com/nuxt/eslint-config).

## Installation

Using NPM:

```bash
npm install --save-dev @thrivehive/eslint-plugin-nuxt
```

Using Yarn:

```bash
yarn add --dev @thrivehive/eslint-plugin-nuxt
```

## Usage

In .eslintrc.js:

```js
module.exports = {
  extends: [
    '@thrivehive/nuxt'
  ]
};
```