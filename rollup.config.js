import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  name: 'take',
  exports: 'default',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './index.js',
  output: [
    Option({
      file: './dist/object-take.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/object-take.cjs',
      format: 'commonjs',
    }),
    Option({
      file: './dist/object-take.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/object-take.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/object-take.umd.js',
      format: 'umd',
    }),
    Option({
      file: './dist/object-take.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
