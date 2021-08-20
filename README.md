# esbuild-plugin-json5

Use JSON5 files as ES6 modules with `esbuild`.

## Install

```sh
yarn add -D esbuild-plugin-json5
```

or

```sh
npm i -D esbuild-plugin-json5
```

## Usage

Add to your esbuild plugins list:

```js
const esbuild = require("esbuild");
const { json5Plugin } = require("esbuild-plugin-json5");

esbuild.build({
  ...
  plugins: [
    json5Plugin()
  ]
  ...
});
```
