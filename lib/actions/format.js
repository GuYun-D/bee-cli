const fs = require('fs');
const path = require('path');
const { commandSpawn, getCommand } = require('../utils/terminal');
const { validateFormatCodeType } = require('../utils/validate');

/**
 * 格式化代码
 * @param {String} type 代码格式化类型
 */
const formatCodeActions = async (type) => {
  if (!type) type = 'all';
  if (validateFormatCodeType(type)) {
    const packageManagerBuffer = await fs.readFileSync(path.join(__dirname, '../config/packageManager.bee-config'));
    const packageManager = packageManagerBuffer.toString();
    const command = getCommand(packageManager);
    ['prettier', 'all'].includes(type) && (await commandSpawn(command, ['prettier']));
    ['lint', 'all'].includes(type) && (await commandSpawn(command, ['lint']));
  }
};

/**
 * 提交代码
 */
const commitCodeAction = async () => {
  await commandSpawn('git', ['add', '.']);
  await commandSpawn('git', ['cz'], { stdio: 'inherit' });
};

module.exports = {
  formatCodeActions,
  commitCodeAction
};
