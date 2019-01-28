# @thrivehive/eslint

This is a [lernajs](https://github.com/lerna/lerna/) repo containing eslint base configs for ThriveHive JavaScript projects. The configs extend [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

- [@thrivehive/eslint-config-node](./packages/eslint-config-node)
- [@thrivehive/eslint-config-vue](./packages/eslint-config-vue)

## Development

Install lerna:
```bash
npm i -g lerna
```

Install all subpackage dependencies

```bash
lerna exec npm install
```


Link local packages together:
```bash
lerna bootstrap
```

Publish all packages that have changes:

```bash
lerna publish
```

## Linting

This project uses the eslint config from [@thrivehive/eslint-config-node](./packages/eslint-config-node).

Lint project and fix auto-fixable issues:

```bash
npm run lint --fix
```

## Lerna docs

https://github.com/lerna/lerna/
