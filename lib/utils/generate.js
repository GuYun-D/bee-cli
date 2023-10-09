/**
 * 生成命令号提示
 * @param {String} color 文本颜色
 * @param {String} message 文本信息
 * @returns
 */
const generateTip = (color, message) => {
  return {
    COLOR: color,
    MESSAGE: message
  };
};

module.exports = {
  generateTip
};
