import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import linaria from 'linaria/rollup'
import css from 'rollup-plugin-css-only'

import pkg from './package.json'

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
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: [ '@babel/plugin-external-helpers' ]
    }),
    resolve(),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/react-is/index.js': [ 'isElement', 'isValidElementType', 'ForwardRef' ],
        'node_modules/linaria/react.js': [ 'styled' ]
      }
    }),
    /* rest of your plugins */
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css(),
  ]
}
