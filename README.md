# object-take

[![Build Status](https://travis-ci.org/VitorLuizC/object-take.svg?branch=master)](https://travis-ci.org/VitorLuizC/object-take)

A really library, almost 150 bytes minified and gzipped, to take value from object using a string for path expression or returns a placeholder if value is undefined or unreachable.

It's approach is based on [idx](https://github.com/facebookincubator/idx), from Facebook, and a _insight_ from Vue.js meetup where @IgorHalfeld shows a way to get a property using eval. Yeah, eval.

## Install

This module is published under NPM registry, so you can install from any package manager.

```sh
npm install --save object-take

# If you're using Yarn use the command below.
yarn add object-take
```

## Usage

Just import take function and take a value from object using a path expression.

```js
import take from 'object-take';

// ...

const name = take(response, 'data.user.name', 'Unknown');
```

You can use brackets, even on first property.

```js
const title = take(paragraphs, '["data"].children[0].textContent');
```

Also, expressions could be attached to path.

```js
const id = take(response, 'data.keys[0].number.toString(16)');
```

## License

Released under the [MIT License](./LICENSE).
