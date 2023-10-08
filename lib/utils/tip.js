/**
 * 任务完成打印tip
 * @param {Number} startTime
 * @param {Number | undefined} endTime
 */
const taskSuccessTip = (startTime, endTime) => {
  if (startTime) {
    let useTimeDone = 0;
    if (endTime) {
      useTimeDone = endTime - startTime;
    }
    const currentDoneTime = Date.now();
    useTimeDone = currentDoneTime - startTime;
    console.log(
      "\033[42;30m DONE \033[40;32m Compiled successfully in " +
        useTimeDone +
        "ms\033[0m"
    );
  }
};

module.exports = {
  taskSuccessTip,
};
