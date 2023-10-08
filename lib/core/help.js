const initHelpConfig = (program) => {
  program.option('-a --auto', 'automatically run project');
  program.option('-c --custorm', 'custom project creation');
};

module.exports = {
  initHelpConfig
};
