# `@bitty/get`

A really small library, almost 150 bytes minified and gzipped, that gets a value from object using a path expression, and returns received placeholder when value is undefinedss or unreachable.

It's approach is based on [idx](https://github.com/facebookincubator/idx), from Facebook, and a _insight_ from Vue.js meetup where [@IgorHalfeld](https://github.com/IgorHalfeld) shows a way to access a property using eval. Yeah, eval!

## Install

This module is published under NPM registry, so you can install from any package manager.

```sh
npm install --save @bitty/get

# If you're using Yarn use the command below.
yarn add @bitty/get
```

## Usage

Just import `get` function and gets a value from object using a path expression.

```js
import get from '@bitty/get';

// ...

const name = get(response, 'data.user.name', 'Unknown');
```

You can use brackets, even on first property.

```js
const title = get(paragraphs, '["data"].children[0].textContent');
```

Also, expressions could be attached to path.

```js
const id = get(response, 'data.keys[0].number.toString(16)');
```

## License

Released under the [MIT License](./LICENSE).
