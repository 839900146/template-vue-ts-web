module.exports = {
	extends: ['stylelint-config-rational-order'],
	rules: {
		indentation: 'tab',
		// 去掉小数点前面的 0
		'number-leading-zero': 'never',
		// 每个属性声明末尾都要加分号
		'declaration-block-trailing-semicolon': 'always',
		// 第一条属性声明前不允许有空行
		'declaration-empty-line-before': ['never', { ignore: ['after-declaration'] }],
		// 每个样式规则前后都有空行，除了第一条规则与规则前有注释
		'rule-empty-line-before': [
			'always',
			{ except: ['after-single-line-comment', 'first-nested'] },
		],
		// 在结尾 "}" 之前不允许有空行
		'block-closing-brace-empty-line-before': ['never'],
		// 不允许超过一行的空行
		'max-empty-lines': 1,
		// 每行句末不允许有多余空格
		'no-eol-whitespace': true,
		// "{" 前必须有空格
		'block-opening-brace-space-before': 'always',
		// 注释 "/*" 后和 "*/" 前必须有空格
		'comment-whitespace-inside': 'always',
		// 属性名 ":" 后必须有空格
		'declaration-colon-space-after': 'always',
		// 属性名 ":" 前不能有空格
		'declaration-colon-space-before': 'never',
		// 声明属性末尾 ";" 前不能有空格
		'declaration-block-semicolon-space-before': 'never',
		// 属性值中的 "," 后必须有空格
		'function-comma-space-after': 'always',
		// 选择器例如 ">、+、~" 前后必须要有空格
		'selector-combinator-space-before': 'always',
		'selector-combinator-space-after': 'always',
		// 分隔多个选择器之间的 "," 后必须有空格
		'selector-list-comma-space-after': 'always',
		// 分隔多个选择器之间的 "," 前不能有空格
		'selector-list-comma-space-before': 'never',
		// 子代选择器之间没有额外空格
		'selector-descendant-combinator-no-non-space': true,
		// 多个属性值之间的 "," 后必须有空格
		'value-list-comma-space-after': 'always',
		// 多个属性值之间的 "," 前不能有空格
		'value-list-comma-space-before': 'never',
		// 媒体查询中设置断点宽度里的 ":" 后必须有空格
		'media-feature-colon-space-after': 'always',
		// 媒体查询中设置断点宽度里的 ":" 前不能有空格
		'media-feature-colon-space-before': 'never',
	},
}
