const { ERROR_COLOR } = require('./color');
const { generateTip } = require('../utils/generate');

const FORMAT_CODE_TYPE_ERROR = generateTip(ERROR_COLOR, 'The code formatting type should be one of lint, prettier, or all');

module.exports = {
  FORMAT_CODE_TYPE_ERROR
};
