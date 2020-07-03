import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';

const extensions = ['.ts', '.tsx'];

const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'zxlib.solid-router5',
        file: 'dist/dom/index.cjs.js',
        format: 'cjs',
      },
      {
        name: 'zxlib.solid-router5',
        file: 'dist/dom/index.esm.js',
        format: 'esm',
      },
    ],
    external: ['solid-js', 'solid-js/dom', 'router5'],
    plugins: [
      babel({
        extensions,
        exclude: 'node_modules/**',
        presets: ['@babel/preset-typescript', 'solid'],
      }),
      resolve({
        extensions,
      }),
      commonjs(),
      filesize(),
    ],
  },
];

export default configs;
