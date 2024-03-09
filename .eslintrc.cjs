module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"airbnb",
		"airbnb/hooks",
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'camelcase': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/react-in-jsx-scope': 0,
		'import/extensions': 0,
		'react/prop-types': 0,
		'react/no-array-index-key': 0,
		'no-nested-ternary': 0,
		'no-unused-expressions': 0
	},
}
