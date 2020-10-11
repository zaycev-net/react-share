import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['axios', 'react', 'prop-types', 'styled-components'],
  plugins: [
    resolve(),
    svgr(),
    url({
      exclude: ['**/*.svg']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    commonjs()
  ]
};
