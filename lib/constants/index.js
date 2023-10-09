const ERROR_COLOR = '\x1B[31m%s\x1B[0m';

const CREATE_PROJECT = {
  COLOR: '\x1B[36m%s\x1B[0m',
  MESSAGE: 'bee is helping you create a project'
};

const DIR_IS_EXITS = (dirName) => {
  return {
    COLOR: ERROR_COLOR,
    MESSAGE: `The name is illegal. A folder with the name ${dirName} already exists in the current directory`
  };
};

const CREATE_PROJECT_LOADING = 'creating a project...';
const START_INSTALL = 'starting install...';
const START_RUN_PROJECT = 'starting run project...';

const CL_TIP = `
        _____   _____   _____          _____   _       _
        |  _  \\ | ____| | ____|        /  ___| | |     | |
        | |_| | | |__   | |__    ____  | |     | |     | |
        |  _ {  |  __|  |  __|  |____| | |     | |     | |
        | |_| | | |___  | |___         | |___  | |___  | |
        |_____/ |_____| |_____|        \\_____| |_____| |_|
`;

module.exports = {
  CREATE_PROJECT,
  CREATE_PROJECT_LOADING,
  CL_TIP,
  DIR_IS_EXITS,
  START_INSTALL,
  START_RUN_PROJECT
};
