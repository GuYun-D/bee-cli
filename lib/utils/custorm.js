const { input, confirm, select } = require('@inquirer/prompts');

/**
 * 用户自定义创建项目
 */
const custormCreateProject = (defaultProjectName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const projectName = await input({
        message: 'place enter your projectName：',
        default: defaultProjectName || ''
      });

      const isAuto = await confirm({
        message: 'automatically install dependencies？'
      });

      let packageManager;

      if (isAuto) {
        packageManager = await select({
          message: 'package management：',
          choices: [
            {
              name: 'npm',
              value: 'npm'
            },
            {
              name: 'yarn',
              value: 'yarn'
            },
            {
              name: 'pnpm',
              value: 'pnpm'
            }
          ]
        });
      }

      resolve({
        projectName,
        isAuto,
        packageManager
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  custormCreateProject
};
