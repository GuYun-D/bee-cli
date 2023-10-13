const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

/**
 * 读取装配 BeeComponents 类型模版
 * @param {Object} data 给模版的数据
 * @param {config | index} type 模版类型
 */
const createBeeComponentsPageUtil = (data, type = 'config') => {
  const configTemplatePath = path.join(__dirname, '../template/beeComponentPage/config.template.ejs');
  const pageComponentsPath = path.join(__dirname, '../template/beeComponentPage/index.template.ejs');

  return new Promise((resolve, reject) => {
    ejs.renderFile(
      type === 'config' ? configTemplatePath : pageComponentsPath,
      {
        data
      },
      {},
      (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      }
    );
  });
};

module.exports = {
  createBeeComponentsPageUtil
};
