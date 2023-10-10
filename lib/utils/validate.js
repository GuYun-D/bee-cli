const { FORMART_CODE_TYPE } = require('../constants');

/**
 * 校验输入formatType是否合法
 * @param {String} type 格式化代码的type
 */
const validateFormatCodeType = (type) => {
  if (FORMART_CODE_TYPE.includes(type)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  validateFormatCodeType
};
