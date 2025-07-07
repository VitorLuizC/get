import terser from '@rollup/plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  name: 'get',
  exports: 'default',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/get.js',
  output: [
    Option({
      file: './dist/get.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/get.cjs',
      format: 'commonjs',
    }),
    Option({
      file: './dist/get.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/get.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/get.umd.js',
      format: 'umd',
    }),
    Option({
      file: './dist/get.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
