const { spawn } = require('child_process');

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    if (childProcess.stdout) {
      childProcess.stdout.pipe(process.stdout);
      childProcess.stderr.pipe(process.stderr);
    }
    childProcess.on('close', () => {
      resolve();
    });
  });
};

const getCommand = (baseCommand) => {
  return process.platform === 'win32' ? `${baseCommand}.cmd` : baseCommand;
};

module.exports = {
  commandSpawn,
  getCommand
};
