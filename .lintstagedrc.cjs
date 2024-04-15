'use strict';

/**
 * @type {import('lint-staged').Config}
 */
module.exports = {
  '*.js': ['eslint --cache --fix'],
  '*.{js,jsx,json,css}': ['prettier --write']
};
