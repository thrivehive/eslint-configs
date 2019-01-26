# @thrivehive/eslint

This is a lernajs repo containing eslint base configs for ThriveHive JavaScript projects.

- [@thrivehive/eslint-config-node](./packages/eslint-config-node)
- [@thrivehive/eslint-config-vue](./packages/eslint-config-vue)

## Development

Install lerna:
```bash
npm i -g lerna
```

Install all sub-package depencies:
```bash
lerna exec npm i
```

Link local packages together and install package dependencies:
```bash
lerna bootstrap
```

Publish all packages that have changes:
```bash
lerna publish
```

## Linting

This project uses the eslint config from `./packages/eslint-config-node`. 
