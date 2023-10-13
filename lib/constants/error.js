const { ERROR_COLOR } = require('./color');
const { generateTip } = require('../utils/generate');

const FORMAT_CODE_TYPE_ERROR = generateTip(ERROR_COLOR, 'The code formatting type should be one of lint, prettier, or all');
const CREATE_PAGE_IS_EXITS = generateTip(ERROR_COLOR, 'The page you are about to create already exists');
const CREATE_PAGE_ERROR = generateTip(ERROR_COLOR, 'Page creation failed');

module.exports = {
  FORMAT_CODE_TYPE_ERROR,
  CREATE_PAGE_IS_EXITS,
  CREATE_PAGE_ERROR
};
