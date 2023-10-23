const fs = require('fs');
const path = require('path');
const { isDirExits } = require('../utils/dir');
const { CREATE_PAGE_IS_EXITS, CREATE_PAGE_ERROR } = require('../constants/error');
const { createBeeComponentsPageUtil } = require('../utils/template');
const { ERROR_COLOR, DEFAULT_COLOR } = require('../constants/color');
const { custormCreatePage } = require('../utils/custorm');

/**
 * 创建页面
 * @param {String} pageName 页面名称
 * @param {String} pagePath 页面路径
 */
const createBeeComponentsPageAction = async (pageName, pagePath) => {
  if (!pagePath) {
    const defaultPagePathBuffer = await fs.readFileSync(path.join(__dirname, '../config/pagePath.bee-config'));
    const defaultPagePath = defaultPagePathBuffer.toString();
    if (isDirExits(pageName, defaultPagePath)) {
      console.log(CREATE_PAGE_IS_EXITS.COLOR, CREATE_PAGE_IS_EXITS.MESSAGE);
      return;
    }

    const configTemplateData = {
      tableName: pageName,
      columns: []
    };

    try {
      const defaultColumnConfig = [];
      const tableColumnsNumber = await custormCreatePage();
      if (tableColumnsNumber * 1 > 0) {
        for (let i = 0; i < tableColumnsNumber; i++) {
          defaultColumnConfig.push({ label: '', prop: '' });
        }
        configTemplateData.columns = defaultColumnConfig;
      }

      const configFile = await createBeeComponentsPageUtil(configTemplateData, 'config');
      const indexFile = await createBeeComponentsPageUtil({}, 'index');

      const pagePath = path.join(defaultPagePath + '/' + pageName);
      const configPath = path.join(pagePath + '/' + 'config.ts');
      const indexPage = path.join(pagePath + '/' + 'index.vue');

      fs.mkdir(pagePath, {}, (error) => {
        if (!error) {
          fs.writeFileSync(configPath, configFile);
          fs.writeFileSync(indexPage, indexFile);
        }
      });
    } catch (error) {
      console.log(ERROR_COLOR, error);
      console.log(CREATE_PAGE_ERROR.COLOR, CREATE_PAGE_ERROR.MESSAGE);
      console.log(DEFAULT_COLOR, '');
    }
  }
};

module.exports = {
  createBeeComponentsPageAction
};
