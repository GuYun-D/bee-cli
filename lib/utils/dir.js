const fs = require('fs');
const path = require('path');

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
const isDirExits = (dirName, folderPath = './') => {
  const currentFolder = readAllFolderName(folderPath);
  // console.log("获取文件目录结构", currentFolder);
  return currentFolder.includes(dirName);
};

/**
 * 创建文件夹
 * @param {string} dirName
 * @returns
 */
const mikdir = (dirName) => {
  if (!dirName) {
    console.log('\x1B[31m%s\x1B[0m', 'The folder name you want to create is empty');

    return;
  }

  const currentFolder = readAllFolderName('./');
  if (currentFolder.includes(dirName)) {
    console.log('\x1B[31m%s\x1B[0m', `The name is illegal. A folder with the name ${dirName} already exists in the current directory`);
    return;
  }
};

/**
 * 判断某个文件是否存在，不存在就创建
 */
const dirIsExitsOrCreate = (fileName, fileValue, dirName = '../config') => {
  const currentFolder = readAllFolderName(path.join(__dirname, dirName));
  if (!currentFolder.includes(fileName)) {
    fs.writeFile(path.join(__dirname, `../config/${fileName}`), fileValue, (err) => {
      console.log(err);
    });
  }
};

module.exports = {
  mikdir,
  isDirExits,
  dirIsExitsOrCreate
};
