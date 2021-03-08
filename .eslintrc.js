module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 值为0，不检查函数名和参数列表的左括号之间必须有空格
    'space-before-function-paren': 0,
    // 不检查单双引号
    singleQuote: 0,
    // 空格报错检查 禁用掉
    'no-irregular-whitespace': 'off',
    // 设置为函数语句局末必须有分号,否则报错
    semi: ['error', 'always'],
    // 一行结束后不能有空格,关闭
    'no-trailing-spaces': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
