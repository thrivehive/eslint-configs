# @thrivehive/eslint

This is a lernajs repo containing eslint base configs for ThriveHive JavaScript projects.

- [@thrivehive/eslint-plugin-node](./packages/eslint-plugin-node)
- [@thrivehive/eslint-plugin-vue](./packages/eslint-plugin-vue)

## Development

Install lerna:
```bash
npm i -g lerna
```

Link local packages together and install remaining package dependencies:
```bash
lerna bootstrap
```

Publish all packages that have changes:
```bash
lerna publish
```