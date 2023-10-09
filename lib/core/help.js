const initHelpConfig = (program) => {
  program.option('-a --auto', 'automatically run project');
  program.option('-c --custorm', 'custom project creation');
  program.option('-p --packageManager <packageManager>', 'package manager');
};

module.exports = {
  initHelpConfig
};
