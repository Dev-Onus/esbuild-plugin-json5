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

## Options

You can add your own custom configuration of options to `esbuild-plugin-json5`:

```js
json5Plugin({
  // options
});
```

### `loadOptions`

LoadOptions by [`json5`](https://www.npmjs.com/package/json5).

### `transform`

A function which can mutate parsed JSON5. It should return an `object` or `undefined` (that will make no changes to the parsed JSON5).

```js
  transform(data, filePath) {
    // transform the json5 file
    // the file content will be in the "data" field
    // the file path will be in the "filePath" field
    return { filePath, data };
  }
```
