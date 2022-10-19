import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';
// import css from 'rollup-plugin-import-css';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';
import autoprefixer from 'autoprefixer';
import css from 'rollup-plugin-css-only';
// import css from 'rollup-plugin-import-css';

const styledComponentsTransformer = createStyledComponentsTransformer({
	displayName: false,
});

export default [
	{
		input: 'src/index.ts',
		// preserveModules: true,
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			peerDepsExternal(),
			commonjs(),
			babel({
				configFile: './babel.config.js',
			}),
			typescript({
				tsconfig: './tsconfig.json',
				compilerOptions: {
					declaration: true,
					declarationDir: 'types',
					sourceMap: true,
					outDir: './',
				},
			}),
			nodeResolve(),
			styles(),
			// terser(),
			json(),
		],
		external: ['react', 'react-dom', 'styled-components'],
		globals: { 'styled-components': 'styled' },
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/, /\.min.css$/],
		plugins: [dts()],
	},
];
