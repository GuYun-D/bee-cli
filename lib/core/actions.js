const downloadRepo = require("download-git-repo");
const { beeAdminRepo } = require("../config/repo-config");
const { startLoading, endLoading } = require("../utils/loading");
const {
  CREATE_PROJECT,
  CL_TIP,
  CREATE_PROJECT_LOADING,
  DIR_IS_EXITS,
  START_INSTALL,
  START_RUN_PROJECT,
} = require("../constants/index.js");
const { isDirExits } = require("../utils/dir");
const { taskSuccessTip } = require("../utils/tip");
const { commandSpawn } = require("../utils/terminal");

/**
 * 自动安装依赖和启动项目
 * @param {String} projectName 项目文件夹
 */
const installAndRunProject = async (projectName) => {
  const command = process.platform === "win32" ? "yarn.cmd" : "yarn";
  startLoading(START_INSTALL);
  await commandSpawn(command, ["install"], { cwd: `./${projectName}` });
  endLoading();
  await commandSpawn(command, ["run", "dev"], { cwd: `./${projectName}` });
};

/**
 * 创建项目
 * @param {String} projectName
 * @returns
 */
const createProjectActions = (projectName, isRunProject) => {
  console.log(CREATE_PROJECT.COLOR, CREATE_PROJECT.MESSAGE);
  const downloadStartTime = Date.now();
  console.log(CL_TIP);
  if (isDirExits(projectName)) {
    const MESSAGE_INFO = DIR_IS_EXITS(projectName);
    console.log(MESSAGE_INFO.COLOR, MESSAGE_INFO.MESSAGE);
    return;
  }
  startLoading(CREATE_PROJECT_LOADING);
  downloadRepo(beeAdminRepo, projectName, { clone: true }, (err) => {
    endLoading();
    if (err) {
      console.error(err);
    } else {
      taskSuccessTip(downloadStartTime);
      isRunProject && installAndRunProject(projectName);
    }
  });
};

module.exports = {
  createProjectActions,
};
