const { createProjectActions } = require('./actions');

const createCommands = (program) => {
  program
    .command('create <project-name> [others...]')
    .description('craete a bee-admin project')
    .action((projectName) => {
      const { auto, custorm } = program.opts();
      createProjectActions(projectName, !!auto, !!custorm);
    });
};

module.exports = createCommands;
