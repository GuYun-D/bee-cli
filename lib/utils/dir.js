const fs = require("fs");

/**
 * 读取某个文件夹
 * @param {string} dir 要读取的文件夹路径
 * @returns
 */
const readAllFolderName = (dir) => {
  const files = fs.readdirSync(dir);
  return files.map((item) => item);
};

/**
 * 判断当前目录是否存在
 * @param {string} dirName 文件夹名称
 */
const isDirExits = (dirName) => {
  const currentFolder = readAllFolderName("./");
  return currentFolder.includes(dirName);
};

/**
 * 创建文件夹
 * @param {string} dirName
 * @returns
 */
const mikdir = (dirName) => {
  if (!dirName) {
    console.log(
      "\x1B[31m%s\x1B[0m",
      "The folder name you want to create is empty"
    );

    return;
  }

  const currentFolder = readAllFolderName("./");
  if (currentFolder.includes(dirName)) {
    console.log(
      "\x1B[31m%s\x1B[0m",
      `The name is illegal. A folder with the name ${dirName} already exists in the current directory`
    );
    return;
  }
};

module.exports = {
  mikdir,
  isDirExits,
};
