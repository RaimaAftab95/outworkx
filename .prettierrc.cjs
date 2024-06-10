'use strict';

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss']
};
