const styleguide = require ('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  // singleQuote: true, // 使用单引号
  // printWidth: 115,
  // proseWrap: 'always',
  // semi: false, // 不加分号
  // trailingComma: 'none', // 结尾处不加逗号
  // htmlWhitespaceSensitivity: 'ignore', // 忽略'>'下落问题
};
