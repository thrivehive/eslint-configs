# `@thrivehive/eslint-config-node`

[![npm version](https://badge.fury.io/js/%40thrivehive%2Feslint-config-node.svg)](https://badge.fury.io/js/%40thrivehive%2Feslint-config-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## About

This eslint config extends the official [Airbnb JS base config](https://github.com/airbnb/javascript).

## Installation

Using NPM:

```bash
npm install --save-dev @thrivehive/eslint-config-node
```

Using Yarn:

```bash
yarn add --dev @thrivehive/eslint-config-node
```

This package has several peerDependencies, to install all of them at once use the following:

```bash
npm install --save-dev @thrivehive/eslint-config-node eslint eslint-config-airbnb-base eslint-plugin-import
```

## Usage

In .eslintrc.js:

```js
module.exports = {
  extends: [
    '@thrivehive/node'
  ]
};
```