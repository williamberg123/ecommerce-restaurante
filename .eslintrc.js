module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'comma-dangle': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-curly-spacing': 'off',
		'no-console': 'off',
		'array-bracket-spacing': 'off',
		'react/jsx-indent-props': 'off',
		'max-len': 'off',
		'object-curly-newline': 'off'
	},
};
