const downloadRepo = require('download-git-repo');
const { beeAdminRepo } = require('../config/repo-config');
const { startLoading, endLoading } = require('../utils/loading');
const { custormCreateProject } = require('../utils/custorm');
const { CREATE_PROJECT, CL_TIP, CREATE_PROJECT_LOADING, DIR_IS_EXITS, START_INSTALL } = require('../constants/index.js');
const { isDirExits } = require('../utils/dir');
const { taskSuccessTip } = require('../utils/tip');
const { commandSpawn } = require('../utils/terminal');

/**
 * 自动安装依赖和启动项目
 * @param {String} projectName 项目文件夹
 * @param {String} packageManager 包管理器
 */
const installAndRunProject = async (projectName, packageManager) => {
  const command = process.platform === 'win32' ? `${packageManager}.cmd` : packageManager;
  startLoading(START_INSTALL);
  await commandSpawn(command, ['install'], { cwd: `./${projectName}` });
  endLoading();
  await commandSpawn(command, ['run', 'dev'], { cwd: `./${projectName}` });
};

/**
 * 创建项目
 * @param {String} projectName
 * @returns
 */
const createProjectActions = async (projectName, isRunProject, isCustorm) => {
  const baseConfig = {
    projectName: projectName || '',
    isRunProject: !!isRunProject,
    packageManager: 'yarn'
  };

  if (isCustorm) {
    const { projectName: custormProjectName, isAuto, packageManager } = await custormCreateProject(projectName);
    baseConfig.projectName = custormProjectName;
    baseConfig.isRunProject = isAuto;
    baseConfig.packageManager = packageManager;
  }
  console.log(CREATE_PROJECT.COLOR, CREATE_PROJECT.MESSAGE);
  const downloadStartTime = Date.now();
  console.log(CL_TIP);
  if (isDirExits(baseConfig.projectName)) {
    const MESSAGE_INFO = DIR_IS_EXITS(baseConfig.projectName);
    console.log(MESSAGE_INFO.COLOR, MESSAGE_INFO.MESSAGE);
    return;
  }
  startLoading(CREATE_PROJECT_LOADING);
  downloadRepo(beeAdminRepo, baseConfig.projectName, { clone: true }, (err) => {
    endLoading();
    if (err) {
      console.error(err);
    } else {
      taskSuccessTip(downloadStartTime);
      baseConfig.isRunProject && installAndRunProject(baseConfig.projectName, baseConfig.packageManager);
    }
  });
};

module.exports = {
  createProjectActions
};
