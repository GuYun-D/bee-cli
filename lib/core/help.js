const initHelpConfig = (program) => {
  program.option('-a --auto', 'automatically run project');
  program.option('-c --custorm', 'custom project creation');
  program.option('-p --packageManager <packageManager>', 'package manager');
  program.option('-ft --fomat-type <type>', 'format code type, lint、prettier、all');
};

module.exports = {
  initHelpConfig
};
