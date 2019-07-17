module.exports = {
	extends: ['plugin:vue-libs/recommended', './index.js'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		// 设置 js 的解析器为 babel-eslint
		parser: 'babel-eslint',
		ecmaVersion: 2019,
		// ECMAScript modules 模式
		sourceType: 'module',
		ecmaFeatures: {
			// 不允许 return 语句出现在 global 环境下
			globalReturn: false
		},
		// 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
		requireConfigFile: false,
		// 仅允许 import export 语句出现在模块的顶层
		allowImportExportEverywhere: false
	},
	plugins: ['vue'],
	rules: {}
}
