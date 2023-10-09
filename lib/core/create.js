const { createProjectActions } = require('./actions');

const createCommands = (program) => {
  program
    .command('create <project-name> [others...]')
    .description('craete a bee-admin project')
    .action((projectName) => {
      const { auto, custorm, packageManager } = program.opts();
      createProjectActions(projectName, !!auto, !!custorm, packageManager);
    });
};

module.exports = createCommands;
