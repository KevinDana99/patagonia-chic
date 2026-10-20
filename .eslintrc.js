module.exports = {
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:security/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: '12',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'security', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'no-use-before-define': 'off',
		'no-extra-boolean-cast': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/prefer-as-const': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
		'prettier/prettier': 'warn',
	},
};
