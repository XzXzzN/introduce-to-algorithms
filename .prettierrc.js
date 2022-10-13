module.exports = {
    // 字符串使用单引号
    singleQuote: true,
    // 大括号内的首尾需要空格
    bracketSpacing: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 箭头函数参数括号
    arrowParens: 'avoid',
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 crlf/lf/auto
    endOfLine: 'auto',
    // 禁用var，用let和const代替
    'no-var': 2,
    // 强制全等( === 和 !==)
    eqeqeq: 2,
    // 箭头函数参数括号，一个参数时可省略括号
    'arrow-parens': [2, 'as-needed'],
    // 箭头函数，箭头前后空格
    'arrow-spacing': [2, {before: true, after: true}],
    // 单行代码/字符串最大长度
    'max-len': [2, {code: 140}],
    // tab长度
    tabWidth: 4,
    // 末尾是否要分号
    semi: true,
    // jsx 使用单引号
    jsxSingleQuote: true
}
