const { createProjectActions } = require('../actions/craete');
const { createBeeComponentsPageAction } = require('../actions/createBeeComponentsPage');

const createCommands = (program) => {
  // 创建项目
  program
    .command('create <project-name> [others...]')
    .description('craete a bee-admin project')
    .action((projectName) => {
      const { auto, custorm, packageManager } = program.opts();
      createProjectActions(projectName, !!auto, !!custorm, packageManager);
    });

  // 创建页面
  program
    .command('create-page <pageName>')
    .description('create a page of type BeeComponents')
    .action((pageName) => {
      const { pagePath } = program.opts();
      createBeeComponentsPageAction(pageName, pagePath);
    });
};

module.exports = createCommands;
