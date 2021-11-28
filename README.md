# `@bitty/get`

A really small and type-safe (requires TypeScript >= 4.1.3) function, that gets a nested value from an object using a path string (like `"a.b[0].d"`). If value is `undefined` or unreachable returns the placeholder instead.

-   📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.
    -   Supports both NodeJS used with ESM (`import`/`export`) and CommonJS (`require`/`module.exports`).

-   ⚡ Lightweight:
    -   Weighs less than 150 bytes (when minified and gzipped).
    -   Tree-shakeable.
    -   Side-effects free.

-   🔋 Batteries included:
    -   No dependencies.
    -   Its not based on newer browser's APIs or es2015+ features.

-   🏷 Safe:
    -   JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
    -   Made with TypeScript as strict as possible.
    -   Unit tests with AVA (types was also tested).

It's approach is based on [idx](https://github.com/facebookincubator/idx), from Facebook, and an _insight_ from a Vue.js meetup where [@IgorHalfeld](https://github.com/IgorHalfeld) showed a way to get nested values using `eval`.

## Install

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install --save @bitty/get

# If you're using Yarn use the command below.
yarn add @bitty/get
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/get"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/get"></script>

<script>
  // UMD module is exposed through the "get" global function.
  console.log(get);
  //=> "[Function: get]"

  var users = [{ name: 'Carlos Marcos' }];

  console.log(get(users, '[0].name', 'Unknown'));
  //=> "Carlos Marcos"
</script>
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
const title = get(paragraphs, '[0].children[0].textContent');
```

## License

Released under [MIT License](./LICENSE).
