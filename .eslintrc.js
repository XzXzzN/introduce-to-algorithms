/*
 * @Author: Xcracker
 * @Date: 2022-10-13 22:36:54
 * @LastEditors: Xcracker
 * @LastEditTime: 2022-10-18 00:40:37
 * @Descripttion:
 */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'google'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // 代码规范(2) 强制使用windows的CRLF换号格式
        'linebreak-style': ['error', 'windows'],
        // 代码规范(3) 四个空格缩进
        indent: ['error', 4],
        // 代码规范(4) 要求 Switch 语句中有 Default 分支
        'default-case': 'error',
        // 代码规范(4) 强制在 switch 的冒号左边无空格, 右边有空格
        'switch-colon-spacing': ['error', {after: true, before: false}],
        // 代码规范(5) 禁止在一元操作符之前或之后存在空格
        'space-unary-ops': 'error',
        // 代码规范(5) 二元运算符两个操作数之间必须使用空格
        'space-infix-ops': 'error',
        // 代码规则(7) 关键字与括号之间都必须加一个空格
        'keyword-spacing': ['error', {before: true, after: true}],
        // 代码规则(9) 禁止在函数标识符和其调用之间有空格
        'func-call-spacing': ['error', 'never'],
        // 代码规则(10) 禁止在数组括号内出现空格
        'array-bracket-spacing': ['error', 'never'],
        // 代码规则(11) 强制圆括号内的空格
        'space-in-parens': ['error', 'never'],
        // 代码规则(11) 禁止大括号中有空格
        'object-curly-spacing': ['error', 'never'],
        // 代码规则(14) 代码长度140, 忽略注释
        'max-len': ['error', {code: 140, tabWidth: 4, ignoreComments: true}],
        // 扩展运算符及其表达式之间要求有空格
        'rest-spread-spacing': ['error', 'always'],
        // 代码规则(15) 如果需要换行，运算符必须放在新行的开头
        'operator-linebreak': [2, 'before', {overrides: {'?': 'after'}}],
        // 代码规则(16) 大括号风格要求
        'brace-style': ['error', 'stroustrup'],
        // 代码规则(17) 定义对象的set存取器属性时，强制定义get
        'accessor-pairs': 2,
        // 代码规则(19) 要求遵循大括号约定
        curly: 'error',
        // 代码规则(20) 禁用不必要的分号
        'no-extra-semi': 'error',
        // 代码规则(21) 禁用末尾逗号
        'comma-dangle': ['error', 'never'],
        // 代码规则(22) 统一小驼峰
        camelcase: 'error',
        // 代码规则(23) 类名使用大驼峰
        'new-cap': 'error',
        // 代码规则(25) 使用 === 替代 ==
        eqeqeq: [2, 'allow-null'],
        // 代码规则(26) ECMAScript 5 改变了parseInt()的这种行为，它不再自动检测八进制文本，而是把它们当作十进制文本。然而，对第一个参数的十六进制和十进制的解释之间的差异导致很多开发者继续使用基数来确保字符串是按预期的方式解释执行。
        radix: 'error',
        // 代码规则(29) 要求对象字面量属性名称使用引号
        'quote-props': ['error', 'as-needed'],
        // 代码规则(30) 禁止直接在对象实例上调用 Object.prototype 的一些方法。
        'no-prototype-builtins': 'error',
        // 代码规则(33) 禁止直接调用eval
        'no-eval': 'error',
        // 代码规则(34) 禁止出现多个空格
        'no-multi-spaces': 'error',
        // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-bracket-spacing': [2, 'never'],
        // 文件末尾强制换行
        'eol-last': 2,
        // 强制在左花括号和同一行上的下一个 token 之间禁用空格
        'block-spacing': ['error', 'never'],
        // 禁止在计算属性中使用空格
        'computed-property-spacing': ['error', 'never'],
        // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
        'no-unreachable': 'error',
        // 禁止不必要的转义字符
        'no-useless-escape': 'error',
        // 禁用with
        'no-with': 'error',
        // 单个变量无需括号
        'arrow-parens': ['error', 'as-needed']
    }
};
