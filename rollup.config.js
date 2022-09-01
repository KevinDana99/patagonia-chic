import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';
import css from 'rollup-plugin-import-css';

const styledComponentsTransformer = createStyledComponentsTransformer({
	displayName: true,
});

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'es',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				transformers: [
					() => ({
						before: [styledComponentsTransformer],
					}),
				],
			}),
			terser(),
			css(),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'dist/esm/index.js',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
