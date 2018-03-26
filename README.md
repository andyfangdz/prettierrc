
# andyfangdz Prettier Config

[![Greenkeeper badge](https://badges.greenkeeper.io/andyfangdz/prettierrc.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/andyfangdz/prettierrc.svg?branch=master)](https://travis-ci.org/andyfangdz/prettierrc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Based on `sourcegraph/prettierrc`

## Usage

```
npm install --save-dev @andyfangdz/prettierrc
```

Then add this `prettier.config.js` to the project:

```js
module.exports = require('@andyfangdz/prettierrc')
```

## Making changes

```
npm link
cd <project>
npm link @andyfangdz/prettierrc
npm run prettier
```

## Publish a new version

Follow [semver](http://semver.org/). **Changing or adding a rule is a breaking change and requires a new major version**.

```
npm version major|minor|patch
git push
git push --tags
npm publish
```
