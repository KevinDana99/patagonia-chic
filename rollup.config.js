import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';
import css from 'rollup-plugin-import-css';
import json from '@rollup/plugin-json';
import url from 'rollup-plugin-url';

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
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				compilerOptions: {
					declaration: true,
					declarationDir: 'types',
				},
				transformers: [
					() => ({
						before: [styledComponentsTransformer],
					}),
				],
			}),
			terser(),
			css(),
			json(),
			url({
				include: ['**/*.otf'],
				limit: Infinity,
			}),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];
